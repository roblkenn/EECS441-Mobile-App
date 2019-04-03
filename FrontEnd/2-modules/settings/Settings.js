import React, { Component } from "react";
import { Alert, Button, View, StyleSheet, Text, TextInput, TouchableOpacity, Switch, ScrollView, Dimensions } from "react-native";
import { WhiteText } from "../../3-utils/Text";
import colors from "../../0-base/colors";

export class Settings extends Component {
  
  constructor(props) { 
    super(props);
    this.initialState = {
      uploadValue : false,
      price: "",
      description: "",
      title: "",
      user: "",
    };
    this.state = this.initialState;
  }

  UploadSwitch = (value) => {
    this.setState({uploadValue: value})
  }

  displayPriceInfo() {
      if(this.state.uploadValue) {
        return (
          <TextInput style={styles.price}
          placeholder="e.g. $10.00"
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
          <TextInput 
          style={styles.uploadDescription}
          placeholder = "Write Description Here -- What is your model really great for?"
          multiline={true}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
          maxLength={250}
          />
        );
      }
  }
  displayTitleInfo(){
    if(this.state.uploadValue) {
        return (
          <TextInput style={styles.titleBox}
          placeholder="Name your model"
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          maxLength={25}
          />
        );
      }
  }
  displayNameInfo(){
    if(this.state.uploadValue) {
        return (
          <TextInput style={styles.titleBox}
          placeholder="Username"
          onChangeText={(user) => this.setState({user})}
          value={this.state.user}
          maxLength={12}
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
          Reset the data we have collected about you and start from scratch. 
          Warning: You cannot undo this action. 
        </Description>
         <Button
          onPress={() => {
            Alert.alert(
              'Clear the current editing data?',
              'This action cannot be undone',
              [
                { text: 'Cancel', onPress: () => console.log('Cancelled'), style:'cancel'},
                { text: 'Clear', onPress: () => this.setState(this.initialState)}
              ]
              );
            }}
            title="Clear"
          />
        <Name> Upload Training Model </Name>
        <Description>
          Would you like to upload your personalized training model to the marketplace? 
          Others will be able to purchase and apply your model to their photos.
        </Description>
        <Switch style ={styles.toggle}
        onValueChange = {this.UploadSwitch}
        value = {this.state.uploadValue}
        />
        {this.displayNameInfo()}
        {this.displayTitleInfo()}
       {this.displayPriceInfo()}
       {this.displayDescriptionInfo()}
       < Name > Purchased Models </Name>
       <Description>
        Select which model you would like to use here. You may only select one model.
       </Description>
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
    marginBottom: 10,
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
  },
  titleBox: {
    height: 45,
    marginBottom: 10,
    width: 150,
    textAlign: 'center',
    alignSelf: 'flex-end',
    borderColor: 'orange',
    borderWidth: 2,
    backgroundColor: "white"
  }

});
