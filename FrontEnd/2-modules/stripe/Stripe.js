import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { Component } from 'react';
import stripe from 'tipsi-stripe';

/*stripe.setOptions({
  publishableKey:'pk_test_6kET7677UpCRMhY20DP7Fbag00l2dxiWry',
});

export default class Payment extends Component {
    requestPayment = () => {
    return stripe
      .paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        console.warn('Token created', { stripeTokenInfo });
      })
      .catch(error => {
        console.warn('Payment failed', { error });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Make a payment"
          onPress={this.requestPayment}
          disabled={this.state.isPaymentPending}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
*/