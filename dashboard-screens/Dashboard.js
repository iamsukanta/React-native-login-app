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

export default function Dashboard({ navigation }) {
  // console.log(useContext(AuthContext));
  const { isAuthenticated } = useContext(AuthContext);
  // static contextType = AuthContext;
  // console.log(this.context, "ddddfsd");
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
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
