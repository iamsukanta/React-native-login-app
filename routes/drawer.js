import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import DashboardStack from "./DashboardStack";
import ProfileStack from "./ProfileStack";



const RootDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStack,
  },
  Profile: {
    screen: ProfileStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
