import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const TorchLight = () => {
  const [torchOn, setTorchOn] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [animatedValue] = useState(new Animated.Value(0));

  const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', 'pink'];

  useEffect(() => {
    if (torchOn) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 2000, 
          useNativeDriver: false,
        })
      ).start();
    } else {
      animatedValue.setValue(0);
    }
  }, [torchOn]);

  const toggleTorch = () => {
    setTorchOn(!torchOn);
  };

  const getBackgroundColor = () => {
    const startColor = colors[colorIndex];
    const endColor = colors[(colorIndex + 1) % colors.length];

    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [startColor, endColor],
    });
  };

  useEffect(() => {
    if (torchOn) {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 2000); // Change color every 2 seconds

      return () => clearInterval(interval);
    }
  }, [torchOn]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.light,
          {
            backgroundColor: torchOn ? getBackgroundColor() : 'black',
          },
        ]}
      />
      <TouchableOpacity style={styles.button} onPress={toggleTorch}>
        <Text style={styles.buttonText}>{torchOn ? 'Turn Off' : 'Turn On'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  light: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default TorchLight;
