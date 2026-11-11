import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCart } from "../contexts/cart-context/useCart";
import Button from "../components/Button";
import CartLineItem from "../components/CartLineItem";

export default function CartScreen() {
    const { cartItems, removeFromCart, incrementQty, decrementQty, totalOrderPrice } = useCart();

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item, index }) => (
                   <CartLineItem
                        line={item}
                        onIncrement={() => incrementQty(index)}
                        onDecrement={() => decrementQty(index)}
                        onRemove={() => removeFromCart(index)}
                   />
                )}
                keyExtractor={(cartItem) => cartItem.item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.footer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Items ({cartItems.length})</Text>
                    <Text style={styles.summaryValue}>${totalOrderPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>${totalOrderPrice.toFixed(2)}</Text>
                </View>

                <Button
                    title="Proceed to Checkout"
                    // onPress={handleCheckout}
                    style={styles.checkoutButton}
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
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f8f8f8',
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
    },
    list: {
        padding: 16,
        paddingBottom: 8,
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 15,
        color: '#666',
    },
    summaryValue: {
        fontSize: 15,
        color: '#333',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    totalValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    checkoutButton: {
        marginTop: 16,
    },
});
