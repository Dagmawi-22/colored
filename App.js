import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./data/colors";
import styles from "./styles/style";

const TorchLight = () => {
  const [torchOn, setTorchOn] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

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

export default TorchLight;
