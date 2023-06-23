import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NoteCard(props) {
    // console.log(props);
    const { titulo, contenido } = props;
    // console.log("info Card", titulo, contenido);
    return (
        <View style={styles.card}>
            <View style={styles.marginCard}>
                <View style={styles.colorCard}>
                    <View style={styles.containerText}>
                        <Text style={styles.titulo} numberOfLines={100}>
                            Titulo:
                            <Text style={styles.tituloTexto}> {titulo}</Text>
                        </Text>
                        <Text style={styles.contenido} numberOfLines={100}>
                            {contenido}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        height: "auto",
    },
    marginCard: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    colorCard: {
        flex: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#1e96fc",
    },
    titulo: {
        padding: 5,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    tituloTexto: {
        color: "#ffea00",
        fontSize: 20,
    },
    contenido: {
        color: "#000",
        fontWeight: "500",
        fontSize: 20,
        padding: 5,
    },
    containerText: {
        width: "100%",
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 75,
        height: 75,
        bottom: 10,
        borderRadius: 10,
    },
    number: {
        position: "absolute",
        right: 10,
        color: "#fff",
        fontSize: 20,
    },
    background: {
        flex: 1,
        resizeMode: "contain",
    },
});
