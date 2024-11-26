import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar } from 'react-native-calendars';

const Appointments = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const appointments = [
        {
            id: 1,
            consultantName: 'John Doe',
            consultantNumber: '123-456-7890',
            status: 'confirmed',
            appointmentDate: '2023-08-15',
        },
        {
            id: 2,
            consultantName: 'Jane Smith',
            consultantNumber: '987-654-3210',
            status: 'unconfirmed',
            appointmentDate: '2023-08-18',
        },
        {
            id: 3,
            consultantName: 'John Doe',
            consultantNumber: '123-456-7890',
            status: 'confirmed',
            appointmentDate: '2023-08-15',
        },
        {
            id: 4,
            consultantName: 'Jane Smith',
            consultantNumber: '987-654-3210',
            status: 'unconfirmed',
            appointmentDate: '2023-08-18',
        },
        // Add more appointment data...
    ];

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Appointments</Text>

            <View style={styles.calendarContainer}>
                <Calendar
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: '#7e104f' },
                    }}
                    onDayPress={(day) => handleDateSelect(day.dateString)}
                />
            </View>

            {appointments.map((appointment) => (
                <View key={appointment.id} style={styles.appointmentItem}>
                    <Text>Consultant: {appointment.consultantName}</Text>
                    <Text>Number: {appointment.consultantNumber}</Text>
                    <Text>Status: {appointment.status}</Text>
                    <Text>Appointment Date: {appointment.appointmentDate}</Text>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="comments" size={20} color="#7e104f" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="edit" size={20} color="#7e104f" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="trash" size={20} color="#7e104f" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="calendar" size={20} color="#7e104f" />
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
        color: '#7e104f',
    },
    calendarContainer: {
        marginBottom: 20,
    },
    appointmentItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    actionButton: {
        padding: 5,
    },
});

export default Appointments;
