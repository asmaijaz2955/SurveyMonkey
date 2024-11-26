import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    historyCard: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        color: '#555',
    },
});

const paymentHistory = [
    {
        id: '1',
        date: '2023-08-01',
        amount: '$100',
    },
    {
        id: '2',
        date: '2023-07-15',
        amount: '$75',
    },
    {
        id: '3',
        date: '2023-06-22',
        amount: '$120',
    },
    {
        id: '4',
        date: '2023-05-10',
        amount: '$90',
    },
    {
        id: '5',
        date: '2023-04-18',
        amount: '$150',
    },
    {
        id: '6',
        date: '2023-03-25',
        amount: '$50',
    },
    {
        id: '7',
        date: '2023-02-12',
        amount: '$80',
    },
    {
        id: '8',
        date: '2023-01-06',
        amount: '$110',
    },
    {
        id: '9',
        date: '2022-12-15',
        amount: '$65',
    },
    {
        id: '10',
        date: '2022-11-28',
        amount: '$95',
    },
    // Add more payment history data here
];

const consultationHistory = [
    {
        id: '1',
        date: '2023-08-01',
        user: 'Alice Johnson',
        duration: '45 minutes',
    },
    {
        id: '2',
        date: '2023-07-15',
        user: 'Bob Smith',
        duration: '30 minutes',
    },
    {
        id: '3',
        date: '2023-06-22',
        user: 'Charlie Brown',
        duration: '60 minutes',
    },
    {
        id: '4',
        date: '2023-05-10',
        user: 'David Lee',
        duration: '40 minutes',
    },
    {
        id: '5',
        date: '2023-04-18',
        user: 'Eve Williams',
        duration: '20 minutes',
    },
    {
        id: '6',
        date: '2023-03-25',
        user: 'Frank Miller',
        duration: '50 minutes',
    },
    {
        id: '7',
        date: '2023-02-12',
        user: 'Grace Taylor',
        duration: '55 minutes',
    },
    {
        id: '8',
        date: '2023-01-06',
        user: 'Henry Clark',
        duration: '35 minutes',
    },
    {
        id: '9',
        date: '2022-12-15',
        user: 'Isabella Martinez',
        duration: '25 minutes',
    },
    {
        id: '10',
        date: '2022-11-28',
        user: 'Jack Anderson',
        duration: '40 minutes',
    },
    // Add more consultation history data here
];


const PayHis = ({ navigation }) => {
    const renderHistoryItem = ({ item }) => (
        <View style={styles.historyCard}>
            <Text style={styles.infoText}>Date: {item.date}</Text>
            {item.amount && <Text style={styles.infoText}>Amount: {item.amount}</Text>}
            {item.user && <Text style={styles.infoText}>User: {item.user}</Text>}
            {item.duration && <Text style={styles.infoText}>Duration: {item.duration}</Text>}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment History</Text>
            <FlatList
                data={paymentHistory}
                renderItem={renderHistoryItem}
                keyExtractor={(item) => item.id}
            />
            <Text style={styles.title}>Consultation History</Text>
            <FlatList
                data={consultationHistory}
                renderItem={renderHistoryItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default PayHis;
