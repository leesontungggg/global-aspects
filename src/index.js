import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'

import 'assets/scss/material-kit-react.scss?v=1.9.0'

// pages for this product

const LandingPage = React.lazy(() => import('views/LandingPage/LandingPage.js'))
const AboutPage = React.lazy(() => import('views/AboutPage/AboutPage.js'))
const ServicePage = React.lazy(() => import('views/ServicePage/ServicePage.js'))
const PortfolioPage = React.lazy(() =>
  import('views/PortfolioPage/PortfolioPage.js')
)
const ContactPage = React.lazy(() => import('views/ContactPage/ContactPage.js'))

function App() {

  return (
    <>
      <Header
        color='transparent'
        brand='Material Kit React'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'white'
        }}
      />

      <Switch>
        <Route path='/about' component={AboutPage} />
        <Route path='/service' component={ServicePage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/' component={LandingPage} />
      </Switch>

    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={() => <div></div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
)
