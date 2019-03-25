import React, { Component } from "react";
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, } from "react-native";
import colors from "../../0-base/colors";
import { connect } from "react-redux";
const { width, height } = Dimensions.get("window");


const select = ({ market }) => ({
  products: market.products
});

function Market({ products }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>
      <ScrollView
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollBodył}
          scrollEnabled={true}
        >
      {products.map(product => (
        <View key={product.title} style={styles.product}>
          <Text style={styles.name}>
            {product.username}
          </Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{ width: 115, height: 100, marginRight: 5 }}
              source={{ uri: "https://static1.squarespace.com/static/5867aa75893fc0dff9ee6386/5b1024571ae6cf8146094bfb/5b1024890e2e72380d363c1b/1527784599268/8C9A5433.jpg?format=2500w" }}
            />
            <Image
              style={{ width: 115, height: 100, marginRight: 5 }}
              source={{ uri: "https://static1.squarespace.com/static/5867aa75893fc0dff9ee6386/5b1024571ae6cf8146094bfb/5b1024890e2e72380d363c1b/1527784599268/8C9A5433.jpg?format=2500w" }}
            />
            <Image
              style={{ width: 115, height: 100, marginRight: 5 }}
              source={{ uri: "https://static1.squarespace.com/static/5867aa75893fc0dff9ee6386/5b1024571ae6cf8146094bfb/5b1024890e2e72380d363c1b/1527784599268/8C9A5433.jpg?format=2500w" }}
            />
          </View>
        </View>
      ))}
      </ScrollView>
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
  product: {
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "orange",
    marginBottom: 20
  },
  name: {
    fontSize: 28,
    letterSpacing: 1,
    color: colors.black,
  },
  description: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 10
  },
  price: {
    borderWidth: 1,
    position: "absolute",
    right: 30,
    top: 220,
    padding: 10,
    backgroundColor: "orange",
    borderColor: colors.offWhite
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  scrollBody: {
    width,
    flex: 1,
    backgroundColor: colors.darkGrey
  }
});
