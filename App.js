import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const navigator = createStackNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
      // navigationOptions:{
      //   headerShown:false
      // }
    },
    search: {
      screen: SearchScreen,
      navigationOptions:{
        headerLeft:()=>null,
        headerTitleAlign:"center"
      }
    }
  },
  {
    initialRouteName: "welcome",
    defaultNavigationOptions: {
      title: "Find a Spot",
    },
  }
);

export default createAppContainer(navigator);