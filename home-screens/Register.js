import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { toggleIsAuthenticated } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/grocee_logo.png")}
        />
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter name" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter password" />

        <Button
          style={styles.loginButton}
          onPress={toggleIsAuthenticated}
          title="Register"
        />
      </View>
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

  innerContainer: {
    width: 300,
  },

  logo: {
    alignSelf: "center",
    width: 180,
    height: 50,
  },

  label: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },

  input: {
    // flexDirection: 'column',
    padding: 10,
    borderWidth: 1,
    borderColor: "#ff0",
    marginBottom: 20,
  },

  loginButton: {
    marginTop: 20,
    // width: '100%',
    // flexDirection: 'row'
  },
});
