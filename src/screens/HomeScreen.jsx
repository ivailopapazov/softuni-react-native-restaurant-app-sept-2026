import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Alert, RefreshControl } from "react-native";
import CategoryCard from "../components/CategoryCard";
import FeaturedCard from "../components/FeaturedCard";
import { featuredItems } from "../data/data";
import { Link } from "@react-navigation/native";
import { categoryApi } from "../api";

export default function HomeScreen() {
    const [categories, setCategories] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        categoryApi.getAll()
            .then(setCategories)
            .catch((error) => Alert.alert('Error', error.message));
    }, []);

    const handleRefresh = async () => {
        setRefreshing(true);

        try {
            const data = await categoryApi.getAll();
            setCategories(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setRefreshing(false);
        }
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        >
            <View style={styles.header}>
                <Text style={styles.restaurantName}>Tasty Bites</Text>
                <View style={styles.headerInfo}>
                    <Text style={styles.infoText}>⭐ 4.8 Rating</Text>
                    <Text style={styles.infoDot}>•</Text>
                    <Text style={styles.infoText}>🕐 25-35 min</Text>
                </View>
                <Text style={styles.tagline}>Delicious food delivered to your door</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Featured Items</Text>
                <FlatList
                    data={featuredItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Link screen="Details" params={{ item }} style={{ marginRight: 12 }}>
                            <FeaturedCard {...item} />
                        </Link>

                    )}
                    horizontal
                    contentContainerStyle={styles.featuredList}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Categories</Text>
                {categories.map((category) => (
                    <Link screen="Category" params={{ categoryId: category.id, categoryName: category.title }} style={{ marginBottom: 12, }}>
                        <CategoryCard key={category.id} title={category.title} />
                    </Link>
                ))}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 24,
        paddingTop: 16,
        paddingBottom: 28,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.9,
    },
    infoDot: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.6,
        marginHorizontal: 8,
    },
    tagline: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },
    section: {
        padding: 16,
        paddingBottom: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    featuredList: {
        paddingRight: 16,
    },
    bottomPadding: {
        height: 24,
    },
});
