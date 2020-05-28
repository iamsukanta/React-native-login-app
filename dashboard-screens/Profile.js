import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  TextInput,
} from "react-native";
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Profile({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Profile</Text>
      <Text>Name: { user.name } </Text>
      <Text>Email: { user.email } </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
