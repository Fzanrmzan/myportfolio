import CustomCursor from '../components/shared/AnimatedCursor'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 