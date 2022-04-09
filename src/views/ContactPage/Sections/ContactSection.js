import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { title } from "assets/jss/material-kit-react.js";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import { useSpring, animated } from "react-spring";

const validationSchema = yup.object().shape({
  first_name: yup
    .string("Enter your first name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .number("Enter a valid number")
    .required("Enter your phone number")
    .typeError("You must specify a number")
    .min(3, "Too Short!"),
});

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "3rem",
    marginTop: "16px",
    minHeight: "32px",
    textDecoration: "none",
    position: "relative",
    color: "#21436E",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  formTitle: {
    ...title,
    marginTop: "8px",
    minHeight: "32px",
    textDecoration: "none",
    position: "relative",
    color: "white",
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
  description: {
    color: "#999",
  },
  yellowChip: {
    color: "#5B7B44",
    backgroundColor: "#5B7B4421",
    fontWeight: 900,
  },
  productionImage: {
    width: "100%",
    height: "auto",
  },
  purpleButton: {
    background: "#21436E",
    borderRadius: "50px",
    padding: "12px 30px",
  },
  yellowSubmitButton: {
    background: "#5B7B44",
    borderRadius: "50px",
    padding: "12px 30px",
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
  },
  whiteSuccessButton: {
    color: "#5B7B44",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
  },
  services: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "75px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "100px",
    },
  },
  serviceRaised: {
    margin: "0px 16px",
    borderRadius: "24px",
    boxShadow:
      "0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)",
  },
  servicesGrid: {
    gridGap: "40px 20px",
    justifyContent: "center",
  },
  servicesIcon: {
    width: "60px",
    height: "60px",
  },
  whycustomer: {
    marginTop: "100px",
  },
  valueContainer: {
    marginTop: 20,
    marginBottom: 20,
    color: "#21436E",
  },
  valueIcon: {
    marginRight: 16,
  },
  valueItemContainer: {
    padding: "4px 0px",
  },
  contact: {
    marginTop: "100px",
  },
  contactAddressContainer: {
    display: "flex",
    alignItems: "center",
  },
  contactAddress: {
    textAlign: "start",
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0",
    color: "#032d60",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
  },
  contactPhone: {
    textAlign: "end",
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0",
    color: "#032d60",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
  },
  imgPortfolio: {
    width: "100%",
    height: "auto",
  },
  dFlexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    minWidth: 120,
    textAlign: "start",
    marginTop: theme.spacing(2),
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textFieldSpacing: {
    textAlign: "start",
    marginTop: theme.spacing(2),
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white",
    },
  },
  textFieldWhite: {
    color: "white",
  },
  formContainer: {
    margin: theme.spacing(2),
    backgroundColor: "#21436E",
    borderRadius: "5%",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      padding: "40px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "80px",
    },
  },
}));

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.oid = "00D5g000004Q7r1";
      values.submit = "Submit";
      values["00N5g000006oAit"] = "Global Aspects";
      values.lead_source = "Web";

      // console.log(values)
      // setIsSuccess(true)

      fetch(
        "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
        {
          method: "POST",
          mode: "no-cors",
          body: new URLSearchParams(values),
        }
      ).then(function (response) {
        console.log(response);
        setIsSuccess(true);
      });
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.services}>
        <animated.div
          style={useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: 500,
          })}
        >
          <GridContainer justify="center">
            <GridItem
              className={classes.dFlexCenter}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <h2 className={classes.title}>Contact Us</h2>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <img
                alt="Global Aspects"
                className={classes.productionImage}
                src={require("assets/img/teamwork.svg")}
              ></img>
            </GridItem>
          </GridContainer>
        </animated.div>
        <animated.div
          style={useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: 1500,
          })}
        >
          {" "}
          <form onSubmit={formik.handleSubmit}>
            <GridContainer className={classes.formContainer} justify="center">
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <h4 className={classes.formTitle}>
                  Please get in touch
                  <br /> and let us know how we can help
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="first_name"
                  name="first_name"
                  label="First Name"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="title"
                  name="title"
                  label="Title"
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="phone"
                  name="phone"
                  label="Phone"
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="company"
                  name="company"
                  label="Company"
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes.textFieldSpacing}
                  fullWidth
                  variant="outlined"
                  id="description"
                  name="description"
                  label="How can we help?"
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <Button
                  disabled={isSuccess}
                  className={classes.yellowSubmitButton}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </GridItem>

              {isSuccess ? (
                <GridItem
                  style={{ textAlign: "center" }}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={classes.whiteSuccessButton}
                >
                  <h4>
                    Thank you for your enquiry. We look forward to working with
                    you.
                  </h4>
                </GridItem>
              ) : null}
            </GridContainer>
          </form>
        </animated.div>
      </div>
    </div>
  );
}
