import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ selectedNumber }) => {
  return (
    <View style={styles.summaryContainer}>
      <Text>you selected</Text>
      <View style={styles.selectContainer}>
        <Text style={styles.summaryNumber}>{selectedNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryNumber: {
    fontSize: 32,
    color: "blue"
  },
  summaryContainer: {
    alignItems: "center"
  },
  selectContainer: {
    borderWidth: 2,
    borderColor: "green",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15
  }
});

export default NumberContainer;
