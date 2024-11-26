import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    approvalCard: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoText: {
        marginTop: 4,
        color: '#555',
    },
});

const registrationRequests = [
    {
        id: '1',
        consultantName: 'Alice Johnson',
        email: 'alice@example.com',
    },
    {
        id: '2',
        consultantName: 'Bob Smith',
        email: 'bob@example.com',
    },
    {
        id: '3',
        consultantName: 'Charlie Brown',
        email: 'charlie@example.com',
    },
    {
        id: '4',
        consultantName: 'David Lee',
        email: 'david@example.com',
    },
    {
        id: '5',
        consultantName: 'Eve Williams',
        email: 'eve@example.com',
    },
    {
        id: '6',
        consultantName: 'Frank Miller',
        email: 'frank@example.com',
    },
    {
        id: '7',
        consultantName: 'Grace Taylor',
        email: 'grace@example.com',
    },
    {
        id: '8',
        consultantName: 'Henry Clark',
        email: 'henry@example.com',
    },
    {
        id: '9',
        consultantName: 'Isabella Martinez',
        email: 'isabella@example.com',
    },
    {
        id: '10',
        consultantName: 'Jack Anderson',
        email: 'jack@example.com',
    },
    // Add more registration requests here
];


const Approve = ({ navigation }) => {
    const [approvedRequests, setApprovedRequests] = useState([]);

    const handleApprove = (requestId) => {
        // Implement logic to approve the registration request
        const approvedRequest = registrationRequests.find(request => request.id === requestId);
        if (approvedRequest) {
            setApprovedRequests([...approvedRequests, approvedRequest]);
        }
    };

    const renderRequest = ({ item }) => (
        <View style={styles.approvalCard}>
            <Text style={styles.name}>{item.consultantName}</Text>
            <Text style={styles.infoText}>Email: {item.email}</Text>
            <Button title="Approve" onPress={() => handleApprove(item.id)} color="#7e104f" />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={registrationRequests}
                renderItem={renderRequest}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Approve;
