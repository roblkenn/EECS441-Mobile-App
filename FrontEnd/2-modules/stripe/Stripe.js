import React, { Component } from 'react';
import { View } from 'react-native';
import stripe from 'tipsi-stripe';

stripe.setOptions({
  publishableKey: "pk_test_6kET7677UpCRMhY20DP7Fbag00l2dxiWry",
});

const theme = {
  primaryBackgroundColor: "white",
  secondaryBackgroundColor: "darkgray",
  primaryForegroundColor: "white",
  secondaryForegroundColor: "white",
  accentColor: "orange",
  errorColor: "black",
};
export class NewCardPage extends Component {
  componentDidMount() {
    
    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'zip',
      theme
    };
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        // Get the token from the response, and send to your server
      })
      .catch(error => {
        // Handle error
        alert("Error Reading Card")
      });
  }
  render() {
    return <View />
  }
}