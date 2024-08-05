import React from "react";
import { StyleSheet, View } from "react-native";
import TorchLight from "./components/TorchLight";

export default function App() {
  return (
    <View style={styles.container}>
      <TorchLight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
