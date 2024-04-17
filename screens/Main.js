import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      faces: []
    };
    this.onFacesDetected = this.onFacesDetected.bind(this)
  }
  onFacesDetected({faces}){
    this.setState({faces:faces})
  }

  render() {
    <View style={styles.x}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.minecraft}>
          <Image
            source={require("../assets/appIcon.png")}
            style={styles.appIcon}
          />
          <Text style={styles.appName}>Look Me....</Text>
        </View>
        <View style={styles.middleContainer}>
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.front}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast,
              detectLandmarks: FaceDetector.Constants.Landmarks.all,
              runClassifications: FaceDetector.Constants.Classifications.all
            }}
            onFacesDetected={this.onFacesDetected}
            onFacesDetectionError={this.onFacesDetectionError}
          />
        </View>
        <View style={styles.aparnaMamIsBest}>
          <View style={styles.minecraftIsGood}></View>
          <View style={styles.iShouldBeBetter}></View> 
        </View>
      </View>
    
  }
}

const styles = StyleSheet.create({
  x: {
    flex: 1,
    backgroundColor: "#E7F2F8"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  minecraft: {
    flex: 0.13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7F2F8",
    flexDirection: "row"
  },
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  appName: {
    fontSize: 25
  },
  middleContainer: { flex: 0.67 },
  aparnaMamIsGreat: {
    flex: 0.2,
    backgroundColor: "#E7F2F8"
  },
  minecraftIsGood: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iShouldBeBetter: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFE7BC"
  }
});
