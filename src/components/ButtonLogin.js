import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonLogin(props) {
    const { action } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.buttonText}>Crear</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 225,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffc600",
        marginTop: 50,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
