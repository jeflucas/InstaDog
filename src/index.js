import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Main = () => {
  const [like, setLike] = useState(0);

  var increment = () => {
    setLike(like + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Like</Text>
      <Text style={styles.text}>{like}</Text>
      <TouchableOpacity>
        <Text onPress={increment}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});

export default Main;
