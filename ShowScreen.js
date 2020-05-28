import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeNavigator from './routes/HomeStack';
import DashboardNavigator from "./routes/drawer";
import { AuthContext } from "./context/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";

export default function ShowScreen() {
  const { isAuthenticated, loginApp, logoutApp } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      const token = await AsyncStorage.getItem('token');
      const userData = await AsyncStorage.getItem('user');
      const user = JSON.parse(userData);
      console.log(token, user, "effect data");
      if(token) {
        loginApp(token, user);
      } else {
        logoutApp();
      }
    }
    fetchData();
  }, [loginApp, logoutApp]);

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
