import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  TextInput,
} from "react-native";
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from "@react-native-community/async-storage";

export default function Dashboard({ navigation }) {
  const { logoutApp, user } = useContext(AuthContext);
  const logout = () => {
    let keys = ['token', 'user'];
    AsyncStorage.multiRemove(keys, (err) => {
      logoutApp();
      navigation.navigate('login');
    });
  }
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Welcome { user.name }</Text>
      <Button onPress={logout} title="Log Out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
