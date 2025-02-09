import CustomCursor from '../components/shared/AnimatedCursor'
import { HashRouter as Router, Route, Routes } from "react-router-dom";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 