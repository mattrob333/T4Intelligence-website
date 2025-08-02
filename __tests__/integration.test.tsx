/**
 * Integration Tests
 * 
 * These tests verify that all the new components work together correctly
 * and integrate properly with the existing website infrastructure.
 */

import { render, screen } from '@testing-library/react'
import GoogleAnalytics, { trackEvent, trackFormSubmission, trackCTAClick } from '../components/google-analytics'
import OptimizedImage from '../components/ui/optimized-image'
import FormProgress, { useFormProgress } from '../components/ui/form-progress'

describe('Component Integration', () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'production'
    process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123'
    window.gtag = jest.fn()
  })

  afterEach(() => {
    process.env.NODE_ENV = 'test'
    jest.clearAllMocks()
  })

  it('should render all new components together without conflicts', () => {
    const TestIntegration = () => (
      <div>
        <GoogleAnalytics />
        <OptimizedImage 
          src="/test-hero.jpg"
          alt="Hero image"
          width={1200}
          height={600}
          priority={true}
        />
        <FormProgress
          currentStep={2}
          totalSteps={4}
          stepLabels={['Contact', 'Business Info', 'Requirements', 'Review']}
        />
      </div>
    )

    render(<TestIntegration />)

    // Verify Google Analytics scripts are present
    const scripts = document.querySelectorAll('script')
    expect(scripts.length).toBeGreaterThanOrEqual(2)

    // Verify OptimizedImage renders
    const image = screen.getByAltText('Hero image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('data-priority', 'true')

    // Verify FormProgress renders
    expect(screen.getByText('Step 2 of 4')).toBeInTheDocument()
    expect(screen.getByText('50% Complete')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('should handle analytics tracking with form progress', () => {
    const TestFormWithAnalytics = () => {
      const handleStepComplete = (step: string) => {
        trackEvent('step_complete', 'form_progress', step)
      }

      return (
        <div>
          <GoogleAnalytics />
          <FormProgress currentStep={3} totalSteps={5} />
          <button onClick={() => handleStepComplete('step_3')}>
            Continue
          </button>
        </div>
      )
    }

    render(<TestFormWithAnalytics />)

    // Simulate step completion
    const continueButton = screen.getByText('Continue')
    continueButton.click()

    // Verify analytics tracking was called
    expect(window.gtag).toHaveBeenCalledWith('event', 'step_complete', {
      event_category: 'form_progress',
      event_label: 'step_3',
      value: undefined,
    })
  })

  it('should handle optimized images in forms with proper loading states', async () => {
    const TestFormWithImages = () => (
      <div>
        <GoogleAnalytics />
        <FormProgress currentStep={1} totalSteps={3} />
        <OptimizedImage 
          src="/form-illustration.jpg"
          alt="Form step illustration"
          width={400}
          height={300}
        />
      </div>
    )

    const { container } = render(<TestFormWithImages />)

    // Check that image loading state is properly managed
    const image = screen.getByAltText('Form step illustration')
    expect(image).toHaveClass('opacity-0') // Initially hidden

    // Check loading indicator is present
    const loadingDiv = container.querySelector('.animate-pulse')
    expect(loadingDiv).toBeInTheDocument()
  })

  it('should track CTA clicks with proper context', () => {
    const TestCTAWithTracking = () => {
      const handleCTAClick = () => {
        trackCTAClick('get-started', 'hero-section')
      }

      return (
        <div>
          <GoogleAnalytics />
          <OptimizedImage 
            src="/cta-background.jpg"
            alt="CTA background"
            width={800}
            height={400}
            fill={true}
          />
          <button onClick={handleCTAClick}>
            Get Started Now
          </button>
        </div>
      )
    }

    render(<TestCTAWithTracking />)

    const ctaButton = screen.getByText('Get Started Now')
    ctaButton.click()

    expect(window.gtag).toHaveBeenCalledWith('event', 'cta_click', {
      event_category: 'conversion',
      event_label: 'get-started_hero-section',
      value: undefined,
    })
  })

  it('should handle form submission tracking with progress', () => {
    const TestFormSubmission = () => {
      const handleSubmit = () => {
        trackFormSubmission('contact-form')
      }

      return (
        <div>
          <GoogleAnalytics />
          <FormProgress currentStep={4} totalSteps={4} />
          <form onSubmit={handleSubmit}>
            <button type="submit">Submit Form</button>
          </form>
        </div>
      )
    }

    render(<TestFormSubmission />)

    const submitButton = screen.getByText('Submit Form')
    submitButton.click()

    expect(window.gtag).toHaveBeenCalledWith('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'contact-form',
      value: undefined,
    })
  })

  it('should work properly in SSR/production environment', () => {
    // Test that components don't break during server-side rendering
    const TestSSRComponents = () => (
      <div>
        <GoogleAnalytics />
        <OptimizedImage 
          src="/ssr-test.jpg"
          alt="SSR test image"
          width={600}
          height={400}
          priority={true}
        />
        <FormProgress currentStep={1} totalSteps={2} />
      </div>
    )

    // This should not throw any errors
    expect(() => render(<TestSSRComponents />)).not.toThrow()

    // Verify components render correctly
    expect(screen.getByAltText('SSR test image')).toBeInTheDocument()
    expect(screen.getByText('Step 1 of 2')).toBeInTheDocument()
  })

  describe('Error Handling Integration', () => {
    it('should handle image errors gracefully while maintaining form functionality', async () => {
      const TestErrorHandling = () => (
        <div>
          <OptimizedImage 
            src="/nonexistent.jpg"
            alt="Broken image"
            width={300}
            height={200}
          />
          <FormProgress currentStep={2} totalSteps={3} />
        </div>
      )

      render(<TestErrorHandling />)

      const image = screen.getByAltText('Broken image')
      
      const { fireEvent, waitFor } = await import('@testing-library/react')
      fireEvent.error(image)

      // Image should show error state
      await waitFor(() => {
        expect(screen.getByText('Image failed to load')).toBeInTheDocument()
      })

      // Form progress should still work
      expect(screen.getByText('Step 2 of 3')).toBeInTheDocument()
      expect(screen.getByText('67% Complete')).toBeInTheDocument()
    })

    it('should handle analytics failures gracefully', () => {
      // Simulate analytics failure
      window.gtag = undefined

      const TestAnalyticsFailure = () => {
        const handleClick = () => {
          // This should not throw an error
          trackEvent('test', 'category')
          trackFormSubmission('test-form')
          trackCTAClick('test-cta', 'test-location')
        }

        return (
          <div>
            <GoogleAnalytics />
            <button onClick={handleClick}>Test Button</button>
          </div>
        )
      }

      expect(() => render(<TestAnalyticsFailure />)).not.toThrow()

      const button = screen.getByText('Test Button')
      expect(() => button.click()).not.toThrow()
    })
  })

  describe('Performance Integration', () => {
    it('should not cause layout shifts when loading images in forms', () => {
      const TestLayoutStability = () => (
        <div>
          <FormProgress currentStep={1} totalSteps={3} />
          <OptimizedImage 
            src="/layout-test.jpg"
            alt="Layout test"
            width={500}
            height={300}
          />
          <div>Content after image</div>
        </div>
      )

      const { container } = render(<TestLayoutStability />)

      // Image should have defined dimensions to prevent layout shift
      const image = screen.getByAltText('Layout test')
      expect(image).toHaveAttribute('width', '500')
      expect(image).toHaveAttribute('height', '300')

      // Content should be present
      expect(screen.getByText('Content after image')).toBeInTheDocument()
    })

    it('should load analytics scripts with proper performance settings', () => {
      render(<GoogleAnalytics />)

      const scripts = document.querySelectorAll('script')
      const gaScripts = Array.from(scripts).filter(script => 
        script.getAttribute('src')?.includes('googletagmanager.com') ||
        script.getAttribute('id') === 'google-analytics'
      )

      expect(gaScripts.length).toBe(2)
      
      // Both scripts should use afterInteractive strategy
      gaScripts.forEach(script => {
        expect(script.getAttribute('strategy')).toBe('afterInteractive')
      })
    })
  })
})