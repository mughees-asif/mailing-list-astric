import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <FormControl
              component="fieldset"
              onChange={handleChange('businesscustomer')}
              defaultValue={values.businesscustomer}
            >
              <FormLabel component="legend">Business or Customer</FormLabel>
              <RadioGroup aria-label="business/customer" name="business/customer" >
                <FormControlLabel value="Business" control={<Radio />} label="Business" />
                <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
              </RadioGroup>
            </FormControl>
            <TextField
              placeholder="Enter type of business"
              label="If business, state type of business"
              onChange={handleChange('typeofbusiness')}
              defaultValue={values.typeofbusiness}
              margin="normal"
              fullWidth
            />
            <br />
            <FormControl component="fieldset"
              onChange={handleChange('newsletter')}
              defaultValue={values.newsletter} 
              >
              <FormLabel component="legend">Join Mailing List</FormLabel>
              <RadioGroup aria-label="mailinglist" name="mailinglist" >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              style={{
                backgroundColor: "#6a1b9a",
                color: 'white',
                fontWeight: 'bold'
              }}
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
