import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../home-screens/Login';
import Register from '../home-screens/Register';
import ForgotPassword from "../home-screens/ForgotPassword";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: '',
      headerStyle: { backgroundColor: "#fff", borderBottomColor: '#fff' }
    }
  },
  Register: {
    screen: Register,
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: 'Forgot Password'
    }
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);