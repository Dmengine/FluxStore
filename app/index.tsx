import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {vs, s} from "react-native-size-matters";
import StartButton from "../components/StartButton";

const Homescreen = () => {
  return (
    <ImageBackground
      source={require("../assets/fluxImages/firstImage.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center", overflow: "hidden" }}
    >
     <View style={styles.overlay}>
        <View style={styles.Gem}>
            <Text style={styles.GemHead}>Welcome to GemStore</Text>
            <Text style={styles.GemText}>The home for a fashionista</Text>
            <StartButton />
        </View>
     </View>
    </ImageBackground>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: vs(170),
  },
  Gem: {
    justifyContent: "center",
    alignItems: "center",
    flex: s(1),
  },
  GemHead: {
    fontSize: s(24),
    fontWeight: "bold",
    color: "#fff",
  },
  GemText: {
    fontSize: s(16),
    color: "#fff",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: s(1),
  },
});
