import React, { useState, useEffect } from "react";
import { Component } from "react";
import {
  Alert,
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import colors from "../../0-base/colors";
import { connect } from "react-redux";
import Payment from "../stripe/Stripe";
import { doPurchaseModel } from "../moreImages/ducks";
import { doFetchMarket } from "./ducks/actions";
const { width, height } = Dimensions.get("window");

const select = ({ market, settings }) => ({
  products: market.products,
  myUserName: settings.myUserName,
  modelBlacklist: settings.purchasedModels
});

const actions = {
  purchaseModel: doPurchaseModel,
  fetchMarket: doFetchMarket
};

function Market({
  products,
  myUserName,
  purchaseModel,
  modelBlacklist,
  fetchMarket
}) {
  const [showPurchaseScreen, setShowPurchaseScreen] = useState(false);
  const [pickedModel, setPickedModel] = useState(null);
  useEffect(() => {
    fetchMarket();
  }, []);
  if (showPurchaseScreen)
    return (
      <View>
        <Payment
          goBack={setShowPurchaseScreen}
          purchaseModel={() => purchaseModel(pickedModel)}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
      >
        {products.map(product => {
          console.log(product)
          const inBlacklist =
            modelBlacklist.filter(blackModel => blackModel.id === product.id)
              .length > 0;
          if (inBlacklist) return null;
          return (
            <View key={product.title} style={styles.product}>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.username}>{product.username}</Text>
              <Text style={styles.description}>{product.description}</Text>
              {product.username !== myUserName && (
                <Button
                  onPress={() => {
                    setPickedModel(product);
                    setShowPurchaseScreen(true);
                  }}
                  title={product.price.toString()}
                />
              )}
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 3
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default connect(
  select,
  actions
)(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 90,
    backgroundColor: "white"
  },
  product: {
    marginBottom: 20,
    width: "100%"
  },
  title: {
    textAlign: "center",
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: colors.darkGrey,
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "orange",
    marginBottom: 20
  },
  productTitle: {
    fontSize: 28,
    letterSpacing: 1,
    color: "orange",
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 10
  },
  username: {
    position: "absolute",
    right: 10,
    top: 0,
    fontWeight: "bold",
    padding: 10,
    color: colors.darkGrey
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
