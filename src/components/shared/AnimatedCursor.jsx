import dynamic from 'next/dynamic'

// Dynamically import AnimatedCursor with no SSR to avoid hydration issues
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
})

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={45}
      color="64, 64, 64"
      outerAlpha={0.3}
      innerScale={0.6}
      outerScale={2}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      clickables={[
        'a',
        'button',
        'input',
        'select',
        'textarea',
        '.link',
        '.clickable',
        'label[for]',
        'select',
        '.hover-target'
      ]}
    />
  )
} 