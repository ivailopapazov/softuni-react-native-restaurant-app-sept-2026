import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import FeaturedCard from "../components/FeaturedCard";
import { featuredItems } from "../data/data";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
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
                    renderItem={({ item }) => <FeaturedCard {...item} />}
                    horizontal
                    contentContainerStyle={styles.featuredList}
                />
            </View>
        </View>
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
