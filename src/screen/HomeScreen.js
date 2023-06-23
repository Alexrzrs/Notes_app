import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import notesHomeImage from "../assets/noteHomeImage.png";
import ButtonLogin from "../components/ButtonLogin";

export default function HomeScreen(props) {
    // const { navigation } = props;
    const navigation = useNavigation();
    const goToNotas = () => {
        navigation.navigate("Notas");
    };

    return (
        <View style={styles.container}>
            <Image source={notesHomeImage} style={styles.imageHome} />
            <ButtonLogin action={goToNotas} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcf6bd",
    },
    imageHome: {
        height: 300,
        width: 300,
    },
});
