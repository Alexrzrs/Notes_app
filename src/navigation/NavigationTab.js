import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import NotasScreen from "../screen/NotasScreen";

export default function NavigationTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderIconHome(),
                }}
            />
            <Tab.Screen
                name="Notas"
                component={NotasScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderIconEdit(),
                }}
            />
        </Tab.Navigator>
    );
}

const renderIconHome = () => {
    return (
        <Image
            source={require("../assets/home.png")}
            style={{ height: 45, width: 45, bottom: -20 }}
        />
    );
};

const renderIconEdit = () => {
    return (
        <Image
            source={require("../assets/edit.png")}
            style={{ height: 45, width: 45, bottom: -20 }}
        />
    );
};
