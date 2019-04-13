import React, { Component } from "react";
import { View } from "react-native";
import stripe from "tipsi-stripe";
import { connect } from "react-redux";

const select = ({ settings }) => ({
  id: settings.id
});

stripe.setOptions({
  publishableKey: "pk_test_6kET7677UpCRMhY20DP7Fbag00l2dxiWry"
});

const theme = {
  primaryBackgroundColor: "white",
  secondaryBackgroundColor: "darkgray",
  primaryForegroundColor: "white",
  secondaryForegroundColor: "white",
  accentColor: "orange",
  errorColor: "black"
};
class Payment extends Component {
  componentDidMount() {
    const options = {
      smsAutofillDisabled: true,
      theme
    };
    stripe
      .paymentRequestWithCardForm(options)
      .then(response => {
        fetch("https://styles-api.azurewebsites.net/purchase/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: this.props.id,
            tokenId: response.tokenId,
            amount: 500
          })
        }).then(response => {
          this.props.purchaseModel()
          this.props.goBack();
        });
      })
      .catch(error => {
        this.props.goBack();
      });
  }
  render() {
    return <View />;
  }
}

export default connect(select)(Payment);
