import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import { useState } from "react";
const inputBox = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('sending a message ', newMessage);

        setNewMessage('');
    };

    return (
        <View style={styles.container}>

            <AntDesign name='plus' size={24} color='royalblue' />

            <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder="Type your message here....." />

            <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white' />
        </View>
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