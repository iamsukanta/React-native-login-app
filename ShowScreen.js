import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeNavigator from './routes/HomeStack';
import DashboardNavigator from "./routes/drawer";
import { AuthContext } from "./context/AuthContext";

export default function ShowScreen() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      { isAuthenticated? <DashboardNavigator />: <HomeNavigator/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
