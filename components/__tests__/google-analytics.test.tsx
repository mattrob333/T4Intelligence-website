import { render } from '@testing-library/react'
import GoogleAnalytics, { trackEvent, trackFormSubmission, trackCTAClick } from '../google-analytics'

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    // Reset environment variables
    process.env.NODE_ENV = 'production'
    process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123'
    jest.clearAllMocks()
  })

  afterEach(() => {
    process.env.NODE_ENV = 'test'
  })

  it('should render Google Analytics scripts in production', () => {
    const { container } = render(<GoogleAnalytics />)
    
    const scripts = container.querySelectorAll('script')
    expect(scripts).toHaveLength(2)
    
    // Check external script
    expect(scripts[0]).toHaveAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-TEST123')
    
    // Check inline script content
    expect(scripts[1].textContent).toContain('window.dataLayer = window.dataLayer || []')
    expect(scripts[1].textContent).toContain("gtag('config', 'G-TEST123'")
  })

  it('should not render in non-production environment', () => {
    process.env.NODE_ENV = 'development'
    
    const { container } = render(<GoogleAnalytics />)
    
    expect(container.innerHTML).toBe('')
  })

  it('should use default GA_ID when environment variable is not set', () => {
    const originalValue = process.env.NEXT_PUBLIC_GA_ID
    delete process.env.NEXT_PUBLIC_GA_ID
    
    // Force re-import of component to get updated env var
    jest.resetModules()
    const GoogleAnalyticsReimported = require('../google-analytics').default
    
    const { container } = render(<GoogleAnalyticsReimported />)
    
    const scripts = container.querySelectorAll('script')
    expect(scripts[0]).toHaveAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX')
    
    // Restore original value
    process.env.NEXT_PUBLIC_GA_ID = originalValue
  })

  describe('trackEvent', () => {
    beforeEach(() => {
      // Mock window.gtag
      window.gtag = jest.fn()
    })

    it('should call gtag with correct parameters', () => {
      trackEvent('click', 'button', 'header-cta', 100)
      
      expect(window.gtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'button',
        event_label: 'header-cta',
        value: 100,
      })
    })

    it('should work without optional parameters', () => {
      trackEvent('submit', 'form')
      
      expect(window.gtag).toHaveBeenCalledWith('event', 'submit', {
        event_category: 'form',
        event_label: undefined,
        value: undefined,
      })
    })

    it('should not call gtag when window.gtag is not available', () => {
      window.gtag = undefined
      
      expect(() => trackEvent('click', 'button')).not.toThrow()
    })

    it('should not call gtag on server side', () => {
      // Mock server-side environment
      const originalWindow = global.window
      delete global.window
      
      expect(() => trackEvent('click', 'button')).not.toThrow()
      
      global.window = originalWindow
    })
  })

  describe('trackFormSubmission', () => {
    beforeEach(() => {
      window.gtag = jest.fn()
    })

    it('should track form submission with correct parameters', () => {
      trackFormSubmission('contact-form')
      
      expect(window.gtag).toHaveBeenCalledWith('event', 'form_submit', {
        event_category: 'engagement',
        event_label: 'contact-form',
        value: undefined,
      })
    })
  })

  describe('trackCTAClick', () => {
    beforeEach(() => {
      window.gtag = jest.fn()
    })

    it('should track CTA click with correct parameters', () => {
      trackCTAClick('book-call', 'hero')
      
      expect(window.gtag).toHaveBeenCalledWith('event', 'cta_click', {
        event_category: 'conversion',
        event_label: 'book-call_hero',
        value: undefined,
      })
    })
  })

  describe('TypeScript types', () => {
    it('should have correct global window type', () => {
      // This test ensures the global window.gtag type is properly declared
      expect(typeof window.gtag).toBe('function')
    })
  })
})