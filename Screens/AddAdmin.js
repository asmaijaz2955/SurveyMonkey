import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#7e104f',
    },
});

const AddAdmin = ({ navigation }) => {
    const [adminEmail, setAdminEmail] = useState('');

    const handleAddAdmin = () => {
        // Implement logic to add the admin using adminEmail
        console.log(`Adding admin with email: ${adminEmail}`);
        // Clear the input field after adding the admin
        setAdminEmail('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Add Admin</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Admin Email"
                    value={adminEmail}
                    onChangeText={setAdminEmail}
                />
                <Button
                    title="Add Admin"
                    onPress={handleAddAdmin}
                    color="#7e104f"
                    style={styles.addButton}
                />
            </View>
        </View>
    );
};

export default AddAdmin;
