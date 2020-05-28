import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { AuthContext } from '../context/AuthContext';

export default function Dashboard({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text>Welcome { user.name }</Text>
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
