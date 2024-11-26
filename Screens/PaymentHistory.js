import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const dummyPaymentHistory = [
    { id: 1, date: '2023-08-10', amount: 100, status: 'Success' },
    { id: 2, date: '2023-08-12', amount: 150, status: 'Failed' },
    { id: 3, date: '2023-08-15', amount: 200, status: 'Success' },
    // Add more dummy payment history data...
];

// Generate 20 lines of dummy payment history
for (let i = 4; i <= 20; i++) {
    const paymentDate = `2023-08-${i < 10 ? '0' + i : i}`;
    dummyPaymentHistory.push({
        id: i,
        date: paymentDate,
        amount: Math.floor(Math.random() * 200) + 50, // Generate random amount
        status: i % 2 === 0 ? 'Success' : 'Failed',
    });
}

const PaymentHistory = ({ navigation }) => {
    const handleEdit = (paymentId) => {
        // Handle edit action for payment with the given paymentId
    };

    const handleUpdate = (paymentId) => {
        // Handle update action for payment with the given paymentId
    };

    const handleDelete = (paymentId) => {
        // Handle delete action for payment with the given paymentId
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Payment History</Text>
            {dummyPaymentHistory.map((payment) => (
                <View key={payment.id} style={styles.paymentItem}>
                    <View style={styles.paymentInfo}>
                        <Text>Date: {payment.date}</Text>
                        <Text>Amount: ${payment.amount}</Text>
                        <Text>Status: {payment.status}</Text>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => handleEdit(payment.id)}>
                            <Icon name="edit" size={20} color="#7e104f" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUpdate(payment.id)}>
                            <Icon name="refresh" size={20} color="#7e104f" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(payment.id)}>
                            <Icon name="trash" size={20} color="#7e104f" />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paymentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    paymentInfo: {
        flex: 1,
    },
    actions: {
        flexDirection: 'row',
    },
});

export default PaymentHistory;
