import { render, screen, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import FormProgress, { useFormProgress } from '../form-progress'

describe('FormProgress', () => {
  const defaultProps = {
    currentStep: 2,
    totalSteps: 5,
  }

  it('should render progress with correct step information', () => {
    render(<FormProgress {...defaultProps} />)
    
    expect(screen.getByText('Step 2 of 5')).toBeInTheDocument()
    expect(screen.getByText('40% Complete')).toBeInTheDocument()
  })

  it('should calculate progress percentage correctly', () => {
    render(<FormProgress currentStep={3} totalSteps={4} />)
    
    expect(screen.getByText('75% Complete')).toBeInTheDocument()
  })

  it('should render progress bar with correct width', () => {
    const { container } = render(<FormProgress {...defaultProps} />)
    
    const progressBar = container.querySelector('.bg-gradient-to-r')
    expect(progressBar).toHaveStyle('width: 40%')
  })

  it('should render without step labels by default', () => {
    render(<FormProgress {...defaultProps} />)
    
    // Should not have step labels container
    expect(screen.queryByText('Personal Info')).not.toBeInTheDocument()
  })

  it('should render with step labels when provided', () => {
    const stepLabels = ['Personal Info', 'Business Details', 'Preferences', 'Review', 'Complete']
    
    render(
      <FormProgress
        {...defaultProps}
        stepLabels={stepLabels}
      />
    )
    
    stepLabels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('should apply correct styling to step labels based on progress', () => {
    const stepLabels = ['Step 1', 'Step 2', 'Step 3']
    
    // Test multiple scenarios to understand the logic
    const { rerender } = render(
      <FormProgress
        currentStep={0}
        totalSteps={3}
        stepLabels={stepLabels}
      />
    )
    
    // With currentStep=0, no steps are completed (index < 0 is never true)
    // So we should see the second condition work
    expect(screen.getByText('Step 1')).toHaveClass('text-text-muted') // index 0 === 0-1 is false, so muted
    
    // Now test currentStep=1 
    rerender(
      <FormProgress
        currentStep={1}
        totalSteps={3}
        stepLabels={stepLabels}
      />
    )
    
    expect(screen.getByText('Step 1')).toHaveClass('text-primary-green') // index 0 < 1
    expect(screen.getByText('Step 2')).toHaveClass('text-text-muted') // index 1 >= 1 and 1 !== 1-1
    expect(screen.getByText('Step 3')).toHaveClass('text-text-muted') // index 2 >= 1
  })

  it('should apply custom className', () => {
    const { container } = render(
      <FormProgress {...defaultProps} className="custom-class" />
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should handle edge cases correctly', () => {
    // Test first step
    render(<FormProgress currentStep={1} totalSteps={5} />)
    expect(screen.getByText('20% Complete')).toBeInTheDocument()
    
    // Test last step
    const { rerender } = render(<FormProgress currentStep={5} totalSteps={5} />)
    expect(screen.getByText('100% Complete')).toBeInTheDocument()
    
    // Test single step
    rerender(<FormProgress currentStep={1} totalSteps={1} />)
    expect(screen.getByText('100% Complete')).toBeInTheDocument()
  })

  it('should round progress percentage correctly', () => {
    render(<FormProgress currentStep={1} totalSteps={3} />)
    
    // 1/3 = 0.333... should round to 33%
    expect(screen.getByText('33% Complete')).toBeInTheDocument()
  })
})

describe('useFormProgress', () => {
  const sections = ['Personal', 'Business', 'Review', 'Complete']

  it('should initialize with first section', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    expect(result.current.currentSection).toBe(0)
    expect(result.current.totalSections).toBe(4)
    expect(result.current.isFirstSection).toBe(true)
    expect(result.current.isLastSection).toBe(false)
    expect(result.current.progress).toBe(25) // (0+1)/4 * 100
  })

  it('should navigate to next section', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    act(() => {
      result.current.nextSection()
    })
    
    expect(result.current.currentSection).toBe(1)
    expect(result.current.isFirstSection).toBe(false)
    expect(result.current.isLastSection).toBe(false)
    expect(result.current.progress).toBe(50)
  })

  it('should navigate to previous section', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    // Go to second section first
    act(() => {
      result.current.nextSection()
    })
    
    // Then go back
    act(() => {
      result.current.prevSection()
    })
    
    expect(result.current.currentSection).toBe(0)
    expect(result.current.isFirstSection).toBe(true)
  })

  it('should not go beyond first section when going previous', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    act(() => {
      result.current.prevSection()
    })
    
    expect(result.current.currentSection).toBe(0)
    expect(result.current.isFirstSection).toBe(true)
  })

  it('should not go beyond last section when going next', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    // Go to last section
    act(() => {
      result.current.goToSection(3)
    })
    
    // Try to go beyond
    act(() => {
      result.current.nextSection()
    })
    
    expect(result.current.currentSection).toBe(3)
    expect(result.current.isLastSection).toBe(true)
  })

  it('should jump to specific section', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    act(() => {
      result.current.goToSection(2)
    })
    
    expect(result.current.currentSection).toBe(2)
    expect(result.current.progress).toBe(75)
  })

  it('should not go to invalid section indices', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    // Try negative index
    act(() => {
      result.current.goToSection(-1)
    })
    expect(result.current.currentSection).toBe(0)
    
    // Try index beyond array
    act(() => {
      result.current.goToSection(10)
    })
    expect(result.current.currentSection).toBe(0)
  })

  it('should handle edge case of last section correctly', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    act(() => {
      result.current.goToSection(3) // Last section (index 3)
    })
    
    expect(result.current.isLastSection).toBe(true)
    expect(result.current.progress).toBe(100)
  })

  it('should calculate progress correctly for all sections', () => {
    const { result } = renderHook(() => useFormProgress(sections))
    
    // Test each section's progress
    const expectedProgress = [25, 50, 75, 100]
    
    expectedProgress.forEach((expected, index) => {
      act(() => {
        result.current.goToSection(index)
      })
      expect(result.current.progress).toBe(expected)
    })
  })

  it('should handle single section correctly', () => {
    const { result } = renderHook(() => useFormProgress(['Only Section']))
    
    expect(result.current.currentSection).toBe(0)
    expect(result.current.totalSections).toBe(1)
    expect(result.current.isFirstSection).toBe(true)
    expect(result.current.isLastSection).toBe(true)
    expect(result.current.progress).toBe(100)
  })

  it('should handle empty sections array', () => {
    const { result } = renderHook(() => useFormProgress([]))
    
    expect(result.current.currentSection).toBe(0)
    expect(result.current.totalSections).toBe(0)
    expect(result.current.isFirstSection).toBe(true)
    expect(result.current.isLastSection).toBe(false) // When no sections, isLastSection should be false
  })
})