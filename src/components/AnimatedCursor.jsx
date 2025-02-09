import dynamic from 'next/dynamic'

// Dynamically import AnimatedCursor with no SSR to avoid hydration issues
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
})

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color='220, 90, 90'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
} 