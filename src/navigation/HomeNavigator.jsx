import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function HomeNavigator({ navigation }) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Pressable onPress={() => navigation.navigate("CartTab")}>
                        <Ionicons name="cart" size={24} color="black" style={{ marginRight: 16 }} />
                    </Pressable>
                ),
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Menu" }} />
            <Stack.Screen name="Category" component={CategoryScreen} options={{ title: "Category" }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Details" }} />
        </Stack.Navigator>
    );
}
