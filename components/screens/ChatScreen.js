import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import bg from '../../assets/images/BG.png'
import Message from '../../components/message'
import messages from '../../assets/data/messages.json'
import InputBox from '../inputBox'


const ChatScreen = () => {
    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'} style={styles.bg}>
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    styles={styles.list}
                    inverted

                />

                <InputBox />


            </ImageBackground>

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    bg: {
        flex: 1.
    },

    list: {
        padding: 10
    },


})


export default ChatScreen