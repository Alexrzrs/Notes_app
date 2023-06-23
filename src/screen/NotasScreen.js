import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import NoteCard from "../components/NoteCard";

export default function NotasScreen() {
    const [error, setError] = useState("");
    const [noteData, setNoteData] = useState([]);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,

        onSubmit: (formData) => {
            setError("");
            const { titulo, contenido } = formData;
            // console.log("DatosAntesProcesar", formData);
            if (titulo !== "" && contenido !== "") {
                const newNote = { titulo, contenido };
                setNoteData((prevNoteData) => {
                    if (Array.isArray(prevNoteData)) {
                        return [...prevNoteData, newNote];
                    } else {
                        return [newNote];
                    }
                });
            }
            console.log("Nota enviada ", formData);
            formik.resetForm();
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.empyForPositioning} />
            <Text style={styles.error}>{formik.errors.titulo}</Text>
            <Text style={styles.error}>{formik.errors.contenido}</Text>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>Notas</Text>
            </View>

            <View style={styles.tituloContainer2}>
                <Text style={styles.headersContainer2}>Titulo:</Text>
                <TextInput
                    placeholder="Ingresa el titulo"
                    style={styles.inputTitulo}
                    autoCapitalize="none"
                    value={formik.values.titulo}
                    onChangeText={(text) =>
                        formik.setFieldValue("titulo", text)
                    }
                />
                <Text style={styles.headersContainer2}>Contenido:</Text>
                <TextInput
                    multiline
                    placeholder="Escribe tu nota aqui "
                    style={styles.inputTexto}
                    autoCapitalize="none"
                    value={formik.values.contenido}
                    onChangeText={(text) =>
                        formik.setFieldValue("contenido", text)
                    }
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={formik.handleSubmit}
                >
                    <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contenedorNotas}>
                <FlatList
                    data={noteData}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <NoteCard
                            titulo={item.titulo}
                            contenido={item.contenido}
                        />
                    )}
                />
            </View>
        </View>
    );
}

function initialValues() {
    return {
        titulo: "",
        contenido: "",
    };
}

function validationSchema() {
    return {
        titulo: Yup.string().required("El titulo no puede estar vacio"),
        contenido: Yup.string().required("El contenido no puede estar vacio"),
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fcf6bd",
    },
    titulo: {
        fontSize: 40,
        fontWeight: "700",
    },
    tituloContainer: {
        height: 60,
        width: 380,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fdc43f",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 3, height: 3 },
        marginTop: 5,
    },
    tituloContainer2: {
        top: 20,
        height: 350,
        width: 380,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#99d6ea",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    headersContainer2: {
        fontSize: 20,
        fontWeight: "700",
        left: 20,
        bottom: -10,
    },
    inputTitulo: {
        height: 40,
        width: 350,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    inputTexto: {
        height: 130,
        width: 350,
        margin: 12,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    button: {
        width: 350,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#003566",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    contenedorNotas: {
        top: 10,
        height: 300,
        width: 380,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fffdf7",
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
        padding: 15,
    },
    error: {
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 5,
        top: 20,
    },
    empyForPositioning: {
        marginTop: 15,
    },
});
