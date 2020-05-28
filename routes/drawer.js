import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import DashboardStack from "./DashboardStack";
import ProfileStack from "./ProfileStack";
import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from '../context/AuthContext';

const CustomDrawer = props => {
  const { logoutApp } = useContext(AuthContext);
  return (
    <View>
      <DrawerNavigatorItems {...props} />
      <TouchableOpacity title="Logout" onPress={() => {
        let keys = ['token', 'user'];
        AsyncStorage.multiRemove(keys, (err) => {
          logoutApp();
          props.navigation.navigate('login');
        });
      }}><Text style={styles.logoutMenu}>Logout</Text></TouchableOpacity>
    </View>
  );
};


const RootDrawerNavigator = createDrawerNavigator(
  
  {
    Dashboard: {
      screen: DashboardStack,
    },
    Profile: {
      screen: ProfileStack,
    }
  },

  {
    contentComponent: CustomDrawer
  }
);



const styles = StyleSheet.create({
  logoutMenu: {
    fontWeight: 'bold',
    paddingLeft: 15
  },
});

export default createAppContainer(RootDrawerNavigator);
