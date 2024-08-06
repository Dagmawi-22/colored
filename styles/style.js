import { StyleSheet } from "react-native";

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

export default styles;
