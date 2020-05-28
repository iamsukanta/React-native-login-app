import React,{ useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity,  View, Image, Button, TextInput } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
// import ngrok from 'ngrok';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({ navigation }) {
  const [user, setUser] = useState({ email: '', password: '' })
  const { toggleIsAuthenticated, loginApp, logoutApp } = useContext(AuthContext);

  const gotoRegister = () => {
    navigation.navigate("Register");
  };

  const gotoForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const loginUser = async () => {
    // const ngrok = require('ngrok');
    // const url = await ngrok.connect(3000);
    axios
      .post(`http://192.168.0.113:3000/api/v1/users/login/`, user)
      .then(async (res) => {
        try {
          await AsyncStorage.setItem("token", res.data.token);
          await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
          loginApp(res.data.token, res.data.user);
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
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
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(val) => setUser({...user, email:val})}
          placeholder="Enter email"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={user.password}
          secureTextEntry={true}
          onChangeText={(val) => setUser({ ...user, password: val })}
        />

        <Button style={styles.loginButton} onPress={loginUser} title="Log In" />

        <Text style={styles.textStyle}>
          New to Grocee.xyz? Please{" "}
          <Text style={styles.linkText} onPress={gotoRegister}>
            Register
          </Text>
        </Text>

        <Text
          style={styles.forgotPasswordText}
          onPress={gotoForgotPassword}
        >
          Forgot Password
        </Text>
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
    marginBottom: 10
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

  textStyle: {
    alignSelf: "center",
    marginTop: 10,
  },

  linkText: {
    color: "blue",
  },

  forgotPasswordText: {
    alignSelf: "center",
    marginTop: 10,
    color: "blue",
  },
});
