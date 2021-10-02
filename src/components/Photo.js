import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Photo = ({ file, count }) => {
  const [like, setLike] = useState(count);

  var increment = () => {
    setLike(like + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increment}>
        <Image style={styles.image} source={file} />
        <Text style={styles.text}>
          {like <= 1 ? (
            <Text> {like} curtida</Text>
          ) : (
            <Text>{like} curtidas</Text>
          )}
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
  },
  text: {
    fontSize: 22,
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default Photo;
