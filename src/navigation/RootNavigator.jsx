import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigator from "./TabsNavigator";
import DetailsScreen from "../screens/DetailsScreen";
import CartScreen from "../screens/CartScreen";

export default function RootNavigator() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={TabsNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="CartMain" component={CartScreen} options={{title: 'Cart'}} />
        </Stack.Navigator>
    );
}
