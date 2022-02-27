import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import Chip from '@material-ui/core/Chip'
import Button from 'components/CustomButtons/Button.js'

import { title } from 'assets/jss/material-kit-react.js'
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles(theme => ({
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    position: 'relative',
    color: '#4B0082',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem'
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
  description: {
    color: '#999'
  },
  yellowChip: {
    color: '#FFBC42',
    backgroundColor: '#FCA80F21',
    fontWeight: 900
  },
  productionImage: {
    width: '90%',
    height: 'auto'
  },
  purpleButton: {
    background: '#4B0082',
    borderRadius: '50px',
    padding: '12px 30px'
  },
  services: {
    marginTop: '100px'
  },
  serviceRaised: {
    margin: '0px 16px',
    borderRadius: '24px',
    boxShadow:
      '0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)'
  },
  servicesGrid: {
    gridGap: '20px 20px',
    justifyContent: 'center'
  },
  servicesIcon: {
    width: '60px',
    height: '60px'
  },
  whycustomer: {
    marginTop: '100px'
  },
  valueContainer: {
    marginTop: 20,
    marginBottom: 20,
    color: '#4B0082'
  },
  valueIcon: {
    marginRight: 16
  },
  valueItemContainer: {
    padding: '4px 0px'
  },
  contact: {
    marginTop: '100px'
  },
  contactAddressContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  contactAddress: {
    textAlign: 'start',
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
      fontSize: '1.5rem'
    }
  },
  contactPhone: {
    textAlign: 'end',
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
      fontSize: '1.5rem'
    }
  }
}))

export default function AboutSection () {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={6} md={6} lg={6} style={{ display: 'flex' }}>
          <animated.div
            style={{
              ...useSpring({
                to: { opacity: 1 },
                from: { opacity: 0 },
                delay: 500
              }),
              display: 'flex'
            }}
          >
            <img
              alt='Global Aspects'
              className={classes.productionImage}
              src={require('assets/img/about-min.svg')}
            ></img>
          </animated.div>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <animated.div
            style={{
              ...useSpring({
                to: { opacity: 1 },
                from: { opacity: 0 },
                delay: 1000
              })
            }}
          >
            <Chip label='About Us' className={classes.yellowChip} />

            <h2 className={classes.title}>
              About <br />
              Global Aspects
            </h2>
            <h5 className={classes.subtitle}>
              We are a boutique Salesforce consultancy based in Sydney
              Australia. Our consultants all have multiple Salesforce
              certifications and have an excellent grasp of business and deep
              expertise and enthusiasm for the Salesforce platform.
            </h5>
            <Button
              color='#4B0082'
              size='lg'
              target='_blank'
              rel='noopener noreferrer'
              className={classes.purpleButton}
            >
              ABOUT US
            </Button>
          </animated.div>
        </GridItem>
      </GridContainer>

      <animated.div
        className={classes.services}
        style={{
          ...useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: 2000
          })
        }}
      >
        <GridContainer className={classes.servicesGrid}>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce consultancy'
              description='We provide expertise on the Salesforce Platform whether you are looking to implement Sales Cloud, increase your Salesforce foot print with Service Cloud or add a customer or partner Community.'
              src={
                <img
                  alt='Global Aspects'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='System Integration'
              description='We are highly experienced at designing and building integrations between Salesforce and many other platforms. We are also highly accomplished at migrating data into new and existing Salesforce orgs.'
              src={
                <img
                  alt='Global Aspects'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic2.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Data Archiving Strategy and Design'
              description='We design and build Salesforce archiving solutions to prevent excess data conversations and costs and maximize the health and performance of your org.'
              src={
                <img
                  alt='Global Aspects'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic3-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Custom Developments'
              description='Although we strive for clicks not code where-ever possible we are also have highly experienced developers to build custom components, processes and Salesforce integrations.'
              src={
                <img
                  alt='Global Aspects'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic4-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Admin Support'
              description='We provide a highly efficient admin support service which allows you to focus on doing what you do best. Running your business and growing your highly engaged customer base.'
              src={
                <img
                  alt='Global Aspects'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic5-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Improvements'
              description='We are able to design and build improvements to your existing Salesforce org. Please talk to us about what we can improve for you.'
              src={
                <img
                  alt='Global Aspects'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic6-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <Button
            color='#4B0082'
            size='lg'
            href='/service'
            rel='noopener noreferrer'
            className={classes.purpleButton}
          >
            VIEW SERVICES
          </Button>
        </GridContainer>
      </animated.div>
      <div className={classes.whycustomer}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <Chip label='OUR WORK' className={classes.yellowChip} />
            <h2 className={classes.title}>
              Why Customers <br /> Love Us?
            </h2>
            <h5 className={classes.subtitle}>
              We are passionate About Salesforce and what it can do to transform
              your business when setup correctly. Our customers love us because
              we listen and understand and truly care about delivering an
              optimum solution to fit your business needs.
            </h5>
            <div className={classes.valueContainer}>
              <div className={classes.valueItemContainer}>
                <img
                  alt='Global Aspects'
                  className={classes.valueIcon}
                  src={require('assets/img/ico1h.webp')}
                ></img>
                Deep Business Understanding
              </div>

              <div className={classes.valueItemContainer}>
                <img
                  alt='Global Aspects'
                  className={classes.valueIcon}
                  src={require('assets/img/ico2h.webp')}
                ></img>
                Passionate about Salesforce
              </div>
            </div>

            <Button
              color='#4B0082'
              size='lg'
              target='_blank'
              rel='noopener noreferrer'
              className={classes.purpleButton}
            >
              ABOUT US
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <img
              alt='Global Aspects'
              className={classes.productionImage}
              src={require('assets/img/value.webp')}
            ></img>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
