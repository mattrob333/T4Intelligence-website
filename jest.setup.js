import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Remove Next.js specific props that shouldn't be passed to img element
    const { priority, quality, fill, sizes, placeholder, blurDataURL, onLoad, onError, ...imgProps } = props
    
    return (
      <img 
        {...imgProps}
        data-priority={priority}
        data-quality={quality}
        data-fill={fill}
        data-sizes={sizes}
        data-placeholder={placeholder}
        data-blur-data-url={blurDataURL}
        onLoad={onLoad}
        onError={onError}
      />
    )
  },
}))

// Mock Next.js Script
jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ children, ...props }) => {
    return <script {...props}>{children}</script>
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock window.gtag for Google Analytics tests
Object.defineProperty(window, 'gtag', {
  writable: true,
  value: jest.fn(),
})

// Mock HTMLCanvasElement for generateBlurDataURL tests
HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  createLinearGradient: jest.fn(() => ({
    addColorStop: jest.fn(),
  })),
  fillRect: jest.fn(),
  fillStyle: '',
}))

HTMLCanvasElement.prototype.toDataURL = jest.fn(() => 'data:image/jpeg;base64,test')

// Setup environment variables for tests
process.env.NODE_ENV = 'test'
process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123'