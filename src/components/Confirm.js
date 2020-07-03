import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, city, typeofbusiness, businesscustomer, newsletter }
    } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <form name="Mailing List" method="POST" data-netlify="true">
            <AppBar title="Confirm User Data" name="Mailing List" />
            <List>
              <ListItem>
                <ListItemText primary="First Name:" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name:" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email:" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City:" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Customer or Business:" secondary={businesscustomer} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Type of business:" secondary={typeofbusiness} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Join Mailing List:" secondary={newsletter} />
              </ListItem>
            </List>
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
            >Confirm</Button>
            </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;