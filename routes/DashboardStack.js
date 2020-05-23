import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "../dashboard-screens/Dashboard";
import DashboardHeader from "../shared/DashboardHeader";
import React from 'react';


const screens = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <DashboardHeader title="Dashboard" navigation={navigation} />
        )
      };
    }
  }
};

const DashboardStack = createStackNavigator(screens);
export default DashboardStack;
