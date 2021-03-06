/*eslint-disable*/
import React from 'react'


// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


// core components
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks (props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Home"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        /> */}

        <Button href="/" className={classes.navLink}>
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" className={classes.navLink}>
          About
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button href="/service" className={classes.navLink}>
          Services
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button href="/portfolio" className={classes.navLink}>
          Portfolio
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button href="/contact" className={classes.navLink}>
          Contact
        </Button>
      </ListItem>
      {/*       
      <ListItem className={classes.listItem}>
      
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://twitter.com/CreativeTim?ref=creativetim'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/CreativeTim?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
     */}
    </List>
  )
}
