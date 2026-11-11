import { StyleSheet, View, ScrollView, Image, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/cart-context/useCart";
import SizeSelector from "../components/SizeSelector";
import ExtrasSelector from "../components/ExtrasSelector";
import Button from "../components/Button";
import { mealApi } from "../api";
import QuantityStepper from "../components/QuantityStepper";
import { calculatePrice, AVAILABLE_EXTRAS, calculateUnitPrice, calculateTotalPrice } from "../utils/cartUtils";

export default function DetailsScreen({
    route,
    navigation,
}) {
    const { addToCart } = useCart();
    const [meal, setMeal] = useState({});
    const [size, setSize] = useState('S');
    const [extras, setExtras] = useState([]);
    const [qty, setQty] = useState(1);

    const mealId = route.params.mealId;

    useEffect(() => {
        mealApi.getById(mealId)
            .then(setMeal)
            .catch((error) => Alert.alert('Error', error.message));
    }, [mealId]);

    const toggleExtra = (extra) => {
        setExtras((prevExtras) =>
            prevExtras.includes(extra)
                ? prevExtras.filter((e) => e !== extra)
                : [...prevExtras, extra]
        );
    };

    const unitPrice = calculateUnitPrice(meal.price || 0, size, extras); 
    const totalPrice = calculateTotalPrice(meal.price || 0, size, extras, qty);

    const handleAddToCart = () => {
        addToCart({
            item: meal,
            options: {
                size,
                extras,
                qty,
            },
            totalPrice,
            unitPrice,
        });

        navigation.navigate('MainStack');
    }


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {meal.imageUrl && (
                    <Image
                        source={{ uri: meal.imageUrl }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}

                <View style={styles.content}>
                    <Text style={styles.name}>{meal.name}</Text>
                    <Text style={styles.description}>{meal.description}</Text>
                    <Text style={styles.basePrice}>Base price: ${meal.price?.toFixed(2)}</Text>

                    <View style={styles.divider} />

                    <SizeSelector selectedSize={size} onSelect={setSize} />

                    <ExtrasSelector
                        extras={AVAILABLE_EXTRAS}
                        selectedExtras={extras}
                        onToggle={toggleExtra}
                    />

                    <View style={styles.divider} />

                    <View style={styles.qtySection}>
                        <Text style={styles.qtyLabel}>Quantity</Text>
                        <QuantityStepper
                            qty={qty}
                            onIncrement={() => setQty(q => q + 1)}
                            onDecrement={() => setQty(q => q > 1 ? q - 1 : q)}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.footerButtons}>
                    <Button
                        title="Add to Cart"
                        onPress={handleAddToCart}
                        style={styles.addButton}
                    />
                    <Button
                        title="View Cart"
                        variant="outline"
                        onPress={() => navigation.navigate('CartMain')}
                        style={styles.viewCartButton}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: '#FF3B30',
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginBottom: 8,
    },
    basePrice: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 16,
    },
    qtySection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qtyLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    totalLabel: {
        fontSize: 16,
        color: '#666',
    },
    totalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    footerButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    addButton: {
        flex: 2,
    },
    viewCartButton: {
        flex: 1,
    },
});
