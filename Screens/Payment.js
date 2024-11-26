import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Payment = ({ navigation }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCVV] = useState('');

    const handlePayment = () => {
        // Perform payment processing here
        // You can navigate to a confirmation screen after successful payment
        console.log('Payment successful!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pay for Consultant Services</Text>
            <View style={styles.paymentDetails}>
                <Text style={styles.paymentLabel}>Payment Amount:</Text>
                <Text style={styles.paymentAmount}>$100.00</Text>
            </View>
            <View style={styles.paymentMethods}>
                <Text style={styles.paymentLabel}>Payment Method:</Text>
                <View style={styles.cardInput}>
                    <Icon name="credit-card" size={30} color="#555" />
                    <TextInput
                        style={styles.cardInputText}
                        placeholder="Card Number"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                    />
                </View>
                <View style={styles.cardInput}>
                    <TextInput
                        style={styles.expiryInput}
                        placeholder="MM/YY"
                        value={expiry}
                        onChangeText={setExpiry}
                    />
                    <TextInput
                        style={styles.cvvInput}
                        placeholder="CVV"
                        value={cvv}
                        onChangeText={setCVV}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
                <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paymentDetails: {
        marginBottom: 20,
    },
    paymentLabel: {
        fontSize: 18,
        color: '#555',
    },
    paymentAmount: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    paymentMethods: {
        marginBottom: 20,
    },
    cardInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardInputText: {
        flex: 1,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
        fontSize: 16,
    },
    expiryInput: {
        flex: 1,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
        fontSize: 16,
    },
    cvvInput: {
        flex: 1,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
        fontSize: 16,
    },
    payButton: {
        backgroundColor: '#7e104f',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Payment;
