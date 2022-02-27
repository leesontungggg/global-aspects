import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import { title } from 'assets/jss/material-kit-react.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

const useStyles = makeStyles(theme => ({
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    position: 'relative',
    color: '#4B0082',
    textAlign: 'center',
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
      fontSize: '1.3rem'
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
      fontSize: '1.3rem'
    }
  }
}))

export default function ContactFooter (props) {
  const classes = useStyles()

  return (
    <div className={classes.contact}>
      <h2 className={classes.title}>Contact Us</h2>
      <GridContainer justify='center'>
        <GridItem
          className={classes.contactAddressContainer}
          xs={12}
          sm={6}
          md={6}
          lg={6}
        >
          <h4 className={classes.contactAddress}>
            PO Box 889, Neutral Bay,
            <br /> NSW, 2089,
            <br /> Australia
          </h4>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <h4 className={classes.contactPhone}>
            Monday to Friday 8AM to 6PM
            <br />
            Saturday 9AM to 1PM <br /> +61 404 852 274
          </h4>
          <h4 className={classes.contactPhone}>
            enquiry@australian-digital.com
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  )
}
