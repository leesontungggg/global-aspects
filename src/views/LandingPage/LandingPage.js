import React, { useEffect, Suspense, useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import Footer from 'components/Footer/Footer.js'
import ContactFooter from 'components/ContactFooter/ContactFooter.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Parallax from 'components/Parallax/Parallax.js'

import { container, title } from 'assets/jss/material-kit-react.js'
import Chip from '@material-ui/core/Chip'
import { useSpring, animated } from 'react-spring'

import ProductSection from './Sections/ProductSection'

const useStyles = makeStyles(theme => ({
  white_main: {
    backgroundColor: '#ffffff'
  },
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#4B0082',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem'
    }
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0',
    color: '#032d60',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem'
    }
  },
  saleforcePartner: {
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '200px'
    },
    [theme.breakpoints.up('md')]: {
      height: '88px',
      width: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      height: '88px',
      width: 'auto'
    }
  },
  headerTextContainer: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '100px'
    }
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },

  purpleButton: {
    background: '#4B0082',
    borderRadius: '50px',
    padding: '12px 30px'
  },
  yellowButton: {
    background: '#FFBC42',
    borderRadius: '50px',
    padding: '12px 30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1)
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(1)
    }
  },
  yellowChip: {
    color: '#FFBC42',
    backgroundColor: '#FCA80F21',
    fontWeight: 900
  },
  parallax_background: {
    backgroundColor: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '-90%'
    }
  }
}))

const AnimatedParallax = animated(Parallax)

export default function LandingPage (props) {
  const classes = useStyles()
  const [isPageFullyLoaded, setPageFullyLoaded] = useState(false)

  useEffect(() => {
    setPageFullyLoaded(true)
  },[])
  return (
    <div className={classes.white_main}>
      <AnimatedParallax
        className={classes.parallax_background}
        image={require('assets/img/landing.webp')}
        style={useSpring({
          to: { opacity: isPageFullyLoaded ? 1 : 0 },
          delay: 1000
        })}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={6}
              sm={6}
              md={6}
              className={classes.headerTextContainer}
            >
              <animated.div
                style={useSpring({
                  to: { opacity: 1 },
                  from: { opacity: 0 },
                  delay: 1500
                })}
              >
                <Chip
                  label='WELCOME TO Global Aspects'
                  className={classes.yellowChip}
                />

                <h1 className={classes.title}>
                  We Provide Salesforce and Marketing Automation Consultancy
                </h1>

                <h4 className={classes.subtitle}>
                  Salesforce, Pardot and Salesforce Marketing Cloud Consultancy.
                  System implementation and Enhancement, managed Services and
                  solutions to provide a rich lead pipeline and excellent
                  customer experiences.
                </h4>

                <br />

                <img
                  className={classes.saleforcePartner}
                  src={require('assets/img/salesforce_partner.webp')}
                  alt='Global Aspects'
                ></img>
                <br />
                <br />
                <Button
                  href='/about'
                  color='#4B0082'
                  size='lg'
                  rel='noopener noreferrer'
                  className={classes.purpleButton}
                >
                  Read more
                </Button>

                <Button
                  color='danger'
                  href='/contact'
                  size='lg'
                  rel='noopener noreferrer'
                  className={classes.yellowButton}
                >
                  Contact Us
                </Button>
              </animated.div>
            </GridItem>
          </GridContainer>
        </div>
      </AnimatedParallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <ProductSection />
            <ContactFooter />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  )
}
