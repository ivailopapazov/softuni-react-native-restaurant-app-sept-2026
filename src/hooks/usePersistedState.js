import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function usePersistedState(key, initialValue) {
    const [state, setState] = useState(initialValue);

    // Load state from AsyncStorage on mount
    useEffect(() => {
        const loadState = async () => {
            try {
                const storedState = await AsyncStorage.getItem(key);
                if (storedState !== null) {
                    setState(JSON.parse(storedState));
                }
            } catch (error) {
                console.error("Failed to load state from AsyncStorage", error);
            }
        };

        loadState();
    }, [key]);

    // Save state to AsyncStorage whenever it changes
    useEffect(() => {
        const saveState = async () => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(state));
            } catch (error) {
                console.error("Failed to save state to AsyncStorage", error);
            }
        };

        saveState();
    }, [key, state]);

    return [state, setState];
}
