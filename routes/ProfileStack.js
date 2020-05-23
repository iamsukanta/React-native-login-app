import { createStackNavigator } from "react-navigation-stack";
import DashboardHeader from "../shared/DashboardHeader";
import Profile from "../dashboard-screens/Profile";
import React from "react";


const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <DashboardHeader title="Profile" navigation={navigation} />
        )
      };
    }
  }
};

const ProfileStack = createStackNavigator(screens);
export default ProfileStack;
