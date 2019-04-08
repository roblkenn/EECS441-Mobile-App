import React, { useState } from "react";
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
import { NewCardPage } from "../stripe/Stripe";
import { doPurchaseModel } from "../moreImages/ducks";
const { width, height } = Dimensions.get("window");

const select = ({ market, settings }) => ({
  products: market.products,
  myUserName: settings.myUserName,
  modelBlacklist: settings.purchasedModels
});

const actions = {
  purchaseModel: doPurchaseModel
};

function Market({ products, myUserName, purchaseModel, modelBlacklist }) {
  const [showPurchaseScreen, setShowPurchaseScreen] = useState(false);
  if (showPurchaseScreen) return (
    <View>
    <NewCardPage/>
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
                    Alert.alert("Purchase", "Confirm purchase?", [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancelled"),
                        style: "cancel"
                      },
                      {
                        text: "Buy",
                        onPress: () => {
                          purchaseModel(product);
                          setShowPurchaseScreen(true);
                        }
                      }
                    ]);
                  }}
                  title={product.price}
                />
              )}
              {/* <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 115, height: 100, marginRight: 5 }}
                source={{
                  uri:
                    "https://static1.squarespace.com/static/5867aa75893fc0dff9ee6386/5b1024571ae6cf8146094bfb/5b1024890e2e72380d363c1b/1527784599268/8C9A5433.jpg?format=2500w"
                }}
              />
              <Image
                style={{ width: 115, height: 100, marginRight: 5 }}
                source={{
                  uri:
                    "https://static1.squarespace.com/static/5867aa75893fc0dff9ee6386/5b1024571ae6cf8146094bfb/5b1024890e2e72380d363c1b/1527784599268/8C9A5433.jpg?format=2500w"
                }}
              />
              <Image
                style={{
                  width: 115,
                  height: 100,
                  marginRight: 5,
                  marginBottom: 5
                }}
                source={{
                  uri:
                    "https://static1.squarespace.com/static/5867aa75893fc0dff9ee6386/5b1024571ae6cf8146094bfb/5b1024890e2e72380d363c1b/1527784599268/8C9A5433.jpg?format=2500w"
                }}
              />
            </View> */}
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
