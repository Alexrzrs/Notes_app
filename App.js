import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationTab from "./src/navigation/NavigationTab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <NavigationTab />
        </NavigationContainer>
    );
}
