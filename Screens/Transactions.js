import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const transactions = [
    {
        type: 'User',
        name: 'John Doe',
        amount: 150,
        date: '2023-08-10',
    },
    {
        type: 'Consultant',
        name: 'Jane Smith',
        amount: 300,
        date: '2023-08-09',
    },
    // Add more transactions as needed
    {
        type: 'User',
        name: 'Alice Johnson',
        amount: 200,
        date: '2023-08-08',
    },
    {
        type: 'Consultant',
        name: 'Bob Anderson',
        amount: 450,
        date: '2023-08-07',
    },
    {
        type: 'User',
        name: 'Ella White',
        amount: 180,
        date: '2023-08-06',
    },
    {
        type: 'Consultant',
        name: 'Michael Brown',
        amount: 250,
        date: '2023-08-05',
    },
    // Add more transactions as needed
];


const Transactions = ({ navigation }) => {

    const renderTransaction = ({ item }) => (
        <View style={styles.transactionContainer}>
            <View style={styles.transactionHeader}>
                <Icon name={item.type === 'User' ? 'user' : 'user-md'} size={20} color={item.type === 'User' ? 'blue' : 'green'} />
                <Text style={styles.transactionType}>{item.type}</Text>
            </View>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>Amount: ${item.amount}</Text>
            <Text style={styles.transactionDate}>Date: {item.date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                keyExtractor={(transaction, index) => index.toString()}
                renderItem={renderTransaction}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    transactionContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        padding: 10,
    },
    transactionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    transactionType: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    transactionName: {
        marginBottom: 5,
    },
    transactionAmount: {
        marginBottom: 5,
    },
    transactionDate: {},
});

export default Transactions;




