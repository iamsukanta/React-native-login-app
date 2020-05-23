import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AuthContextProvider from "./context/AuthContext";
import ShowScreen from "./ShowScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <AuthContextProvider>
        <ShowScreen />
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
