import { View, StyleSheet, Alert } from "react-native";
import CategoryItemCard from "../components/CategoryItemCard";
import { useEffect, useState } from "react";
import { mealApi } from "../api";

export default function CategoryScreen({
    route,
    navigation,
}) {
    navigation.setOptions({
        title: route.params.categoryName
    });

    const categoryId = route.params.categoryId;
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        mealApi.getByCategoryId(categoryId) 
            .then(result => setMeals(result))
            .catch((error) => Alert.alert('Error', error.message));
    }, [categoryId]) 

    return (
        <View style={styles.container}>
            {meals.map((item) => (
                <CategoryItemCard
                    key={item.id}
                    {...item}
                    onPress={() => navigation.navigate("Details", { item })}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});
