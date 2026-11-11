import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from './Badge';

export default function CartIcon({ count, onPress, color = '#007AFF' }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Ionicons name="cart-outline" size={26} color={color} />
        <Badge count={count} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginRight: 8,
  },
});
