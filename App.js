import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TorchLight = () => {
  const [torchOn, setTorchOn] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    ["red", "orange"],
    ["yellow", "green"],
    ["blue", "purple"],
    ["pink", "red"],
    ["purple", "blue"],
  ];

  useEffect(() => {
    if (torchOn) {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [torchOn]);

  const toggleTorch = () => {
    setTorchOn(!torchOn);
  };

  return (
    <View style={styles.container}>
      {torchOn && (
        <LinearGradient
          colors={colors[colorIndex]}
          style={styles.light}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={toggleTorch}>
        <Text style={styles.buttonText}>
          {torchOn ? "Turn Off" : "Turn On"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  light: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.7,
  },
  button: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default TorchLight;
