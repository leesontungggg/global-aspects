import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import ContactFooter from "components/ContactFooter/ContactFooter.js";

import { container, title } from "assets/jss/material-kit-react.js";

// Sections for this page
import AboutSection from "./Sections/AboutSection.js";

const useStyles = makeStyles((theme) => ({
  white_main: {
    backgroundColor: "#ffffff",
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#21436E",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0",
    color: "#032d60",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.313rem",
    },
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "5rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "8rem",
    },
  },

  purpleButton: {
    background: "#21436E",
    borderRadius: "50px",
    padding: "12px 30px",
  },
  yellowButton: {
    background: "#5B7B44",
    borderRadius: "50px",
    padding: "12px 30px",
  },
  yellowChip: {
    color: "#5B7B44",
    backgroundColor: "#5B7B4421",
    fontWeight: 900,
  },
  parallax_background: {
    backgroundColor: "#ffffff",
  },
}));

export default function AboutPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.white_main}>
      <div className={classes.main}>
        <div className={classes.container}>
          <AboutSection />
          <ContactFooter />
        </div>
      </div>
      <Footer />
    </div>
  );
}
