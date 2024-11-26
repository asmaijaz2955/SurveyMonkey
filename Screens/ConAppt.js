import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    listItem: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 4,
        color: '#555',
    },
});

const appointments = [
    { id: '1', user: 'User A', time: '10:00 AM' },
    { id: '2', user: 'User B', time: '2:30 PM' },
    // Add more appointments here
    { id: '3', user: 'User C', time: '10:00 AM' },
    { id: '4', user: 'User D', time: '2:30 PM' },
    { id: '5', user: 'User E', time: '10:00 AM' },
    { id: '6', user: 'User F', time: '2:30 PM' },
    { id: '7', user: 'User G', time: '10:00 AM' },
    { id: '8', user: 'User H', time: '2:30 PM' },

];

const ConAppt = ({ navigation }) => {
    const renderAppointment = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={styles.title}>{item.user}</Text>
            <Text style={styles.description}>Appointment Time: {item.time}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={appointments}
                renderItem={renderAppointment}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ConAppt
    ;
