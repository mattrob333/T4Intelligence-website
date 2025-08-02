import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import OptimizedImage, { generateBlurDataURL } from '../optimized-image'

describe('OptimizedImage', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 400,
    height: 300,
  }

  it('should render image with default props', () => {
    render(<OptimizedImage {...defaultProps} />)
    
    const image = screen.getByAltText('Test image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')
    expect(image).toHaveAttribute('width', '400')
    expect(image).toHaveAttribute('height', '300')
  })

  it('should render image with custom props', () => {
    render(
      <OptimizedImage
        {...defaultProps}
        priority={true}
        quality={95}
        className="custom-class"
        sizes="(max-width: 768px) 90vw, 50vw"
      />
    )
    
    const image = screen.getByAltText('Test image')
    expect(image).toHaveAttribute('data-priority', 'true')
    expect(image).toHaveAttribute('data-quality', '95')
    expect(image).toHaveAttribute('data-sizes', '(max-width: 768px) 90vw, 50vw')
  })

  it('should render fill image correctly', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Fill image"
        fill={true}
        sizes="100vw"
      />
    )
    
    const image = screen.getByAltText('Fill image')
    expect(image).toHaveAttribute('data-fill', 'true')
    expect(image).not.toHaveAttribute('width')
    expect(image).not.toHaveAttribute('height')
  })

  it('should show loading state initially', () => {
    const { container } = render(<OptimizedImage {...defaultProps} />)
    
    const loadingDiv = container.querySelector('.animate-pulse')
    expect(loadingDiv).toBeInTheDocument()
    
    const image = screen.getByAltText('Test image')
    expect(image).toHaveClass('opacity-0')
  })

  it('should hide loading state and show image on load', async () => {
    const { container } = render(<OptimizedImage {...defaultProps} />)
    
    const image = screen.getByAltText('Test image')
    
    // Initially image should be hidden
    expect(image).toHaveClass('opacity-0')
    
    // Simulate image load
    fireEvent.load(image)
    
    await waitFor(() => {
      expect(image).toHaveClass('opacity-100')
    })
  })

  it('should show error state on image load error', async () => {
    render(<OptimizedImage {...defaultProps} />)
    
    const image = screen.getByAltText('Test image')
    
    // Simulate image error
    fireEvent.error(image)
    
    await waitFor(() => {
      expect(screen.getByText('Image failed to load')).toBeInTheDocument()
    })
    
    // Image should be removed from DOM
    expect(screen.queryByAltText('Test image')).not.toBeInTheDocument()
  })

  it('should apply custom className to wrapper', () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} className="custom-wrapper-class" />
    )
    
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('custom-wrapper-class')
  })

  it('should handle blur placeholder correctly', () => {
    render(
      <OptimizedImage
        {...defaultProps}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,test"
      />
    )
    
    const image = screen.getByAltText('Test image')
    expect(image).toHaveAttribute('data-placeholder', 'blur')
    expect(image).toHaveAttribute('data-blur-data-url', 'data:image/jpeg;base64,test')
  })

  it('should render error state with custom dimensions', async () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} width={800} height={600} />
    )
    
    const image = screen.getByAltText('Test image')
    fireEvent.error(image)
    
    await waitFor(() => {
      const errorDiv = screen.getByText('Image failed to load').parentElement
      expect(errorDiv).toHaveStyle('width: 800px; height: 600px')
    })
  })

  describe('generateBlurDataURL', () => {
    it('should generate a blur data URL', () => {
      const dataURL = generateBlurDataURL(20, 20)
      
      expect(dataURL).toBe('data:image/jpeg;base64,test') // Mocked return value
      expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith('2d')
      expect(HTMLCanvasElement.prototype.toDataURL).toHaveBeenCalledWith('image/jpeg', 0.1)
    })

    it('should use default dimensions when not provided', () => {
      generateBlurDataURL()
      
      // Canvas should be created with default 10x10 dimensions
      expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalled()
    })

    it('should handle canvas context unavailable', () => {
      // Mock getContext to return null
      HTMLCanvasElement.prototype.getContext = jest.fn(() => null)
      
      const dataURL = generateBlurDataURL()
      
      expect(dataURL).toBe('data:image/jpeg;base64,test') // Still returns the mocked toDataURL
    })
  })

  describe('accessibility', () => {
    it('should have proper alt text', () => {
      render(<OptimizedImage {...defaultProps} alt="Descriptive alt text" />)
      
      const image = screen.getByAltText('Descriptive alt text')
      expect(image).toBeInTheDocument()
    })

    it('should show accessible error message', async () => {
      render(<OptimizedImage {...defaultProps} />)
      
      const image = screen.getByAltText('Test image')
      fireEvent.error(image)
      
      await waitFor(() => {
        const errorMessage = screen.getByText('Image failed to load')
        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).toHaveClass('text-sm')
      })
    })
  })

  describe('performance optimizations', () => {
    it('should set default quality to 85', () => {
      render(<OptimizedImage {...defaultProps} />)
      
      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-quality', '85')
    })

    it('should set default sizes for responsive images', () => {
      render(<OptimizedImage {...defaultProps} />)
      
      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')
    })

    it('should not set priority by default', () => {
      render(<OptimizedImage {...defaultProps} />)
      
      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-priority', 'false')
    })
  })
})