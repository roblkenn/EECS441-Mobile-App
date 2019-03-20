import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../0-base/colors";
import { connect } from "react-redux";

const select = ({ market }) => ({
  products: market.products
});

function Market({ products }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>
      {products.map(product => (
        <View key={product.title}>
          <Text style={styles.post}>{product.title} by {product.username}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      ))}
    </View>
  );
}

export default connect(select)(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 90
  },
  title: {
    fontSize: 30,
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "orange"
  },
  post: {
    fontSize: 30,
    letterSpacing: 1,
    color: colors.black
  },
  description: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 20
  },
  price: {
    borderWidth: 1,
    position: "absolute",
    right: 30,
    top: 220,
    padding: 10,
    backgroundColor: "orange",
    borderColor: colors.offWhite
  }
});
