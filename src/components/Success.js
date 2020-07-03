import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>The team will review your submission and get back to you with further instructions.</p>
            <p style={{textAlign: 'right', fontWeight: 'bold'}}>Go back to <a href="https://astric.netlify.app/">astric*</a></p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
