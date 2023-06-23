import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonGuardar(props) {
    const { action } = props;
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 350,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#003566",
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
