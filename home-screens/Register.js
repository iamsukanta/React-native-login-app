import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';


export default function Register({navigation}) {
  const [user, setUser] = useState({ name: '', email: '', password: ''})

  const { toggleIsAuthenticated } = useContext(AuthContext);

  const registerUser = () => {
    axios
    .post(`http://192.168.0.113:3000/api/v1/users/`, user)
    .then(res => {
      navigation.navigate('login');
      console.log(res.data);
    })
    .catch(error => {
      console.log(error.response);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/grocee_logo.png")}
        />
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={user.name} onChangeText={(val) => setUser({...user, name:val})} placeholder="Enter name" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={user.email} onChangeText={(val) => setUser({...user, email: val})} placeholder="Enter email" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={user.password} onChangeText={(val) => setUser({...user, password: val})} placeholder="Enter password" />

        <Button
          style={styles.loginButton}
          onPress={registerUser}
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
