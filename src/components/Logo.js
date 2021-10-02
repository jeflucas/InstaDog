import React from "react";
import { Text, StyleSheet } from "react-native";

const Logo = () => {
  return <Text style={styles.logo}>InstaDOG</Text>;
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 40,
  },
});
export default Logo;
