import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItems from './components/ChatListItem/index';
import ChatsScreen from './components/screens/ChatsScreen';
import ChatScreen from './components/screens/ChatScreen';




export default function App() {
  return (
    <View style={styles.container}>

      <ChatScreen />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    justifyContent: 'center',
  },
});
