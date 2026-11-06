import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import CartNavigator from "./CartNavigator";
import InfoScreen from "../screens/InfoScreen";
import HomeNavigator from "./HomeNavigator";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();
    // const Tabs = createNativeBottomTabNavigator();
    
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="HomeTab" component={HomeNavigator} options={{ headerShown: false }} />
            <Tabs.Screen name="CartTab" component={CartNavigator} options={{ headerShown: false }} />
            <Tabs.Screen name="Info" component={InfoScreen} />
        </Tabs.Navigator>
    );
}
