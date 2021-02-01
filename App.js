
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    search: {
      screen: SearchScreen,
      navigationOptions:{
        headerTitleAlign:"center"
      }
    }
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "Find a Spot",
    },
  }
);

export default createAppContainer(navigator);


 