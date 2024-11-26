import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef(null);

    const sendMessage = () => {
        if (inputText.trim() === '') {
            return;
        }

        const newMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'customer', // You can use different values for different senders
        };

        setMessages([...messages, newMessage]);
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageBubble,
                            item.sender === 'customer' ? styles.customerBubble : styles.consultantBubble,
                        ]}
                    >
                        <Text>{item.text}</Text>
                    </View>
                )}
                onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your message..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    messageBubble: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        margin: 4,
    },
    customerBubble: {
        backgroundColor: '#7e104f',
        alignSelf: 'flex-start',
    },
    consultantBubble: {
        backgroundColor: '#28a745',
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
    },
    sendButton: {
        backgroundColor: '#7e104f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
    },
});

export default Chat;
