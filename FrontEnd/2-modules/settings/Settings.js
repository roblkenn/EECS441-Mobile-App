import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Switch, ScrollView, Dimensions } from "react-native";
import { WhiteText } from "../../3-utils/Text";

export class Settings extends Component {
  constructor(props) { 
    super(props)
    this.state = { uploadValue : false}
    this.state = { price : "Price" }
    this.state = { description: "Enter Description Here" }
  }
  UploadSwitch = (value) => {
    this.setState({uploadValue: value})
  }

  displayPriceInfo() {
      if(this.state.uploadValue) {
        return (
          <TextInput style={styles.price}
          keyboardType='numeric'
          onChangeText={(price) => this.setState({price})}
          value={this.state.price}
          />
        );
      }
  }
  displayDescriptionInfo() {
      if(this.state.uploadValue) {
        return (
          <TextInput style={styles.uploadDescription}
          multiline={true}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
          maxLength={250}
          />
        );
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <ScrollView>
        <Name>Learning</Name>
        <Description>
          We are learning how you edit to make your editing process easier and faster!
        </Description>
        <Name>Clear Training Model</Name>
        <Description>
          Reset your training model and start from scratch. Warning: You cannot undo
          this action. 
        </Description>
        <Name> Upload Training Model </Name>
        <Description>
          Would you like to upload your personalized training model to the marketplace? 
          Others will be able to purchase and apply your model to their photos.
        </Description>
        <Switch style ={styles.toggle}
        onValueChange = {this.UploadSwitch}
        value = {this.state.uploadValue}
        />
       {this.displayPriceInfo()}
       {this.displayDescriptionInfo()}
       </ScrollView>
      </View>
    );
  }
}
const Name = ({ children, ...props }) => (
  <Text style={styles.name} {...props}>
    {children}
  </Text>
);
const Description = ({ children, ...props }) => (
  <Text style={styles.description} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: "black"
  },
  title: {
    fontSize: 36,
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    color: 'orange',
    marginBottom: 10,
    marginTop: 10
  },
  description: {
    color: "white",
    marginBottom: 10
  },
  toggle: {
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10
  },
  price: {
    height: 45,
    width: 80,
    textAlign: 'center',
    alignSelf: 'flex-end',
    borderColor: 'orange',
    borderWidth: 2,
    backgroundColor: "white"
  },
  uploadDescription: {
    height: 100,
    flex: 0.8,
    marginTop: 10,
    borderColor: "orange",
    borderWidth: 2,
    backgroundColor: "white",
    textAlign: 'center'
  }
});
