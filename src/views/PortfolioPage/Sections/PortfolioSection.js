import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import NavPills from 'components/NavPills/NavPills.js'
import InfoArea from 'components/InfoArea/InfoArea.js'


import { title } from 'assets/jss/material-kit-react.js'
import { useSpring, animated } from 'react-spring'



export default function PortfolioSection() {

  const experienceRender = () => {
    return (<GridContainer className={classes.servicesGrid}>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.salesforce_diagram_mobile}
      >
        <img
          src={require('assets/img/salesforce_diagram.webp')}
          style={{ maxWidth: '100%' }}
          alt='Global Aspects'
        ></img>
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Education'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/education.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Healthcare'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/healthcare.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Engineering'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/engineering.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Retail'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/retail.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.salesforce_diagram_desktop}
      >
        <img
          src={require('assets/img/salesforce_diagram.webp')}
          style={{ maxWidth: '100%' }}
          alt='Global Aspects'
        ></img>
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Banking'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/banking.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Government'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/government.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Councils'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/councils.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Finance'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/finance.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Manufacturing'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/manufacturing.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Oil and Gas'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/oilandgas.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Telco'
          iconColor='info'
          vertical
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/experience/telco.svg')}
            ></img>
          }
        />
      </GridItem>
    </GridContainer>
    )
  }

  const productRender = () => {
    return (<GridContainer className={classes.servicesGrid}>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.salesforce_diagram_mobile}
      >
        <img
          src={require('assets/img/salesforce_diagram.webp')}
          style={{ maxWidth: '100%' }}
          alt='Global Aspects'
        ></img>
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Marketing Cloud'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/marketingcloud.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Service Cloud'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/servicecloud.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Pardot'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/pardot.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Sales Cloud'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/salescloud.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Salesforce Custom Apps'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/customapp.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Salesforce Voice'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/voice.webp')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='CPQ'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/cpq.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.salesforce_diagram_desktop}
      >
        <img
          src={require('assets/img/salesforce_diagram.webp')}
          style={{ maxWidth: '100%' }}
          alt='Global Aspects'
        ></img>
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Communities'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/communities.jpg')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Data Archiving Solutions'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/dataarchiving.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Licence Advice'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/licenceadvice.webp')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Architectural Design Work'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/architecturaldesignwork.webp')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Custom Application Design and Build'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/customapplicationdesignandbuild.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Integrations'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/integration.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Einstein'
          src={
            <img
              alt='Global Aspects'
              className={classes.servicesIcon}
              src={require('assets/img/products/einstein.png')}
            ></img>
          }
          iconColor='info'
          vertical
        />
      </GridItem>
    </GridContainer>
    )
  }


  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.services}>
        <animated.div
          style={{
            ...useSpring({
              to: { opacity: 1 },
              from: { opacity: 0 },
              delay: 500
            })
          }}
        >
          <h2 className={classes.title}>Our Portfolio</h2>
        </animated.div>
        <animated.div
          style={{
            ...useSpring({
              to: { opacity: 1 },
              from: { opacity: 0 },
              delay: 1500
            })
          }}
        >
          <NavPills
            color='primary'
            alignCenter
            tabs={[
              {
                tabButton: 'PRODUCTS',
                tabContent: productRender()
              },
              {
                tabButton: 'INDUSTRY EXPERIENCE',
                tabContent: experienceRender()
              }
            ]}
          />
        </animated.div>
        
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '3rem',
    marginTop: '16px',
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
      fontSize: '0.8rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.313rem'
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
    width: '100%',
    height: 'auto'
  },
  purpleButton: {
    background: '#4B0082',
    borderRadius: '50px',
    padding: '12px 30px'
  },
  services: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '75px'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '100px'
    }
  },
  serviceRaised: {
    borderRadius: '24px',
  },
  salesforce_diagram_mobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  salesforce_diagram_desktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex'
    }
  },
  servicesGrid: {
    gridGap: '100px 0px',
    justifyContent: 'center',
    marginBottom: '32px'
  },
  servicesIcon: {
    width: 'auto',

    [theme.breakpoints.down('sm')]: {
      height: '70px'
    },
    [theme.breakpoints.up('md')]: {
      height: '80px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '100px'
    }
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
  },
  imgPortfolio: {
    width: '100%',
    height: 'auto'
  }
}))