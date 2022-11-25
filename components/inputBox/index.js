import { View, Text, StyleSheet, TextInput, } from 'react-native';
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'


const inputBox = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('sending a message ', newMessage);

        setNewMessage('');
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>

            <AntDesign name='plus' size={24} color='royalblue' />

            <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder="Type your message here....." />

            <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        padding: 5,
        paddingHorizontal: 10,
        alignItems: "center"
    },

    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderColor: "lightgrey",
        borderWidth: StyleSheet.hairlineWidth,


    },

    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden"

    }
});

export default inputBox;