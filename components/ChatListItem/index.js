import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


const ChatListItems = ({ chat }) => {

    const navigation = useNavigation();

    return (

        <Pressable onPress={() => navigation.navigate('chat', { id: chat.id, name: chat.user.name })} style={styles.container}>
            <Image source={{ uri: chat.user.image }} style={styles.image} />

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>

                </View>
                <View>
                    <Text numberOfLines={2} style={styles.subTitle}> {chat.lastMessage.text} </Text>
                </View>
            </View>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },

    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "lighrgray"

    },

    row: {
        flexDirection: 'row',
        marginBottom: 5

    },

    name: {
        flex: 1,
        fontWeight: 'bold',

    },

    subTitle: {
        color: "grey"


    },

})

export default ChatListItems;