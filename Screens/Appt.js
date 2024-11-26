import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    appointmentCard: {
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
    },
});

const appointments = [
    {
        id: '1',
        user: 'Alice Johnson',
        time: '10:00 AM',
    },
    {
        id: '2',
        user: 'Bob Smith',
        time: '2:30 PM',
    },
    {
        id: '3',
        user: 'Charlie Brown',
        time: '3:45 PM',
    },
    {
        id: '4',
        user: 'David Lee',
        time: '11:15 AM',
    },
    {
        id: '5',
        user: 'Eve Williams',
        time: '4:00 PM',
    },
    {
        id: '6',
        user: 'Frank Miller',
        time: '1:30 PM',
    },
    {
        id: '7',
        user: 'Grace Taylor',
        time: '9:45 AM',
    },
    {
        id: '8',
        user: 'Henry Clark',
        time: '12:00 PM',
    },
    {
        id: '9',
        user: 'Isabella Martinez',
        time: '3:00 PM',
    },
    {
        id: '10',
        user: 'Jack Anderson',
        time: '5:30 PM',
    },
    // Add more appointment data here
];


const Appt = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const handleAccept = (appointment) => {
        setSelectedAppointment(appointment);
        setModalVisible(true);
    };

    const renderAppointment = ({ item }) => (
        <View style={styles.appointmentCard}>
            <Text style={styles.name}>{item.user}</Text>
            <Text style={styles.infoText}>Appointment Time: {item.time}</Text>
            <Button title="Accept" onPress={() => handleAccept(item)} color="#7e104f" />
        </View>
    );

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={appointments}
                renderItem={renderAppointment}
                keyExtractor={(item) => item.id}
            />

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.name}>{selectedAppointment?.user}</Text>
                        <Text style={styles.infoText}>Appointment Time: {selectedAppointment?.time}</Text>
                        {/* Add more consultation scheduling elements */}
                        <Button title="Close" onPress={closeModal} color="#7e104f" />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Appt;
