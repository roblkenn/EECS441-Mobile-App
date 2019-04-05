import React, { Component } from "react";
import {
  Alert,
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions
} from "react-native";
import { WhiteText } from "../../3-utils/Text";
import colors from "../../0-base/colors";
import { connect } from "react-redux";
import { doSetActiveModel } from "../editor";
import { doUploadModelToMarket } from "../market/ducks/actions";

const select = ({ settings }) => ({
  purchasedModels: settings.purchasedModels,
  myUserName: settings.myUserName
});

const actions = {
  setActiveModel: doSetActiveModel,
  uploadModelToMarket: doUploadModelToMarket
};

class Settings extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      uploadValue: false,
      price: "",
      description: "",
      title: "",
    };
    this.state = this.initialState;
  }
  clearModel() {
    this.setState(this.initialState);
    this.props.setActiveModel({
      temperature: 1,
      brightness: 1,
      contrast: 1,
      saturation: 1
    });
  }
  UploadSwitch = value => {
    this.setState({ uploadValue: value });
  };

  displayPriceInfo() {
    if (this.state.uploadValue) {
      return (
        <TextInput
          style={styles.price}
          placeholder="e.g. $10.00"
          keyboardType="numeric"
          onChangeText={price => this.setState({ price })}
          value={this.state.price}
        />
      );
    }
  }
  displayDescriptionInfo() {
    if (this.state.uploadValue) {
      return (
        <TextInput
          style={styles.uploadDescription}
          placeholder="Write Description Here -- What is your model really great for?"
          multiline={true}
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
          maxLength={250}
        />
      );
    }
  }
  displayTitleInfo() {
    if (this.state.uploadValue) {
      return (
        <TextInput
          style={styles.titleBox}
          placeholder="Name your model"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          maxLength={25}
        />
      );
    }
  }
  displayNameInfo() {
    if (this.state.uploadValue) {
      return (
        <TextInput
          style={styles.titleBox}
          placeholder="Username"
          onChangeText={user => this.setState({ user })}
          value={this.state.user}
          maxLength={12}
        />
      );
    }
  }

  displaySubmitButton() {
    let { price, description, title } = this.state;
    if (this.state.uploadValue) {
      return (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            console.log(this.state)
            this.props.uploadModelToMarket({
              title,
              price,
              description,
              username: this.props.myUserName
            });
          }}
        >
          <Text style={{ color: "white" }}>update</Text>
        </TouchableOpacity>
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
            We are learning how you edit to make your editing process easier and
            faster!
          </Description>
          <Name>Clear Training Model</Name>
          <Description>
            Reset the data we have collected about you and start from scratch.
            Warning: You cannot undo this action.
          </Description>
          <Button
            onPress={() => {
              Alert.alert(
                "Clear the current editing data?",
                "This action cannot be undone",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancelled"),
                    style: "cancel"
                  },
                  {
                    text: "Clear",
                    onPress: () => this.clearModel()
                  }
                ]
              );
            }}
            title="Clear"
          />
          <Name> Upload Training Model </Name>
          <Description>
            Would you like to upload your personalized training model to the
            marketplace? Others will be able to purchase and apply your model to
            their photos.
          </Description>
          <Switch
            style={styles.toggle}
            onValueChange={this.UploadSwitch}
            value={this.state.uploadValue}
          />
          {/* {this.displayNameInfo()} */}
          {this.displayTitleInfo()}
          {this.displayPriceInfo()}
          {this.displayDescriptionInfo()}
          {this.displaySubmitButton()}
          <Name> Purchased Models </Name>

          <Description>
            Select the model you would like to use below:
          </Description>
          <View style={{ marginVertical: 10 }}>
            {this.props.purchasedModels.map(model => (
              <TouchableOpacity
                onPress={() => this.props.setActiveModel(model.presets)}
              >
                <Text style={styles.purchased}>{model.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Description>
            Want more models? Head over to the marketplace to purchase more!
          </Description>
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  select,
  actions
)(Settings);
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
  submitButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: 150,
    alignSelf: "center",
    marginVertical: 10,
    alignItems: "center"
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: "black"
  },
  purchased: {
    fontSize: 20,
    padding: 5,
    marginBottom: 15,
    color: colors.offWhite,
    textAlign: "center"
  },
  title: {
    fontSize: 36,
    color: "white",
    marginBottom: 20,
    marginTop: 20
  },
  name: {
    fontSize: 20,
    color: "orange",
    marginBottom: 10,
    marginTop: 10
  },
  description: {
    color: "white",
    marginBottom: 10
  },
  toggle: {
    alignSelf: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10
  },
  price: {
    height: 45,
    marginBottom: 10,
    width: "100%",
    alignSelf: "flex-end",
    borderColor: "orange",
    backgroundColor: "white",
    paddingHorizontal: 5
  },
  uploadDescription: {
    height: 100,
    flex: 0.8,
    marginTop: 10,
    backgroundColor: "white",
    paddingHorizontal: 5
  },
  titleBox: {
    height: 45,
    marginBottom: 10,
    width: "100%",
    alignSelf: "flex-end",
    backgroundColor: "white",
    paddingHorizontal: 5
  }
});
