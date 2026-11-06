import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/CartScreen";

export default function CartNavigator() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Cart" }} />
        </Stack.Navigator>
    );
}
