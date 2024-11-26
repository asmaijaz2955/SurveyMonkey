import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const ConTimeSlot = ({ navigation }) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const timeSlots = [
        { id: '1', time: '10:00 AM - 11:00 AM' },
        { id: '2', time: '11:30 AM - 12:30 PM' },
        { id: '3', time: '02:00 PM - 03:00 PM' },
        { id: '4', time: '03:30 PM - 04:30 PM' },
        { id: '5', time: '10:00 AM - 11:00 AM' },
        { id: '6', time: '11:30 AM - 12:30 PM' },
        { id: '7', time: '02:00 PM - 03:00 PM' },
        { id: '8', time: '03:30 PM - 04:30 PM' },
        { id: '9', time: '10:00 AM - 11:00 AM' },
        { id: '10', time: '11:30 AM - 12:30 PM' },
        { id: '11', time: '02:00 PM - 03:00 PM' },
        { id: '12', time: '03:30 PM - 04:30 PM' },
        // Add more time slots as needed
    ];

    const handleTimeSlotSelect = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
    };

    const renderTimeSlotItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.timeSlotItem,
                item.id === selectedTimeSlot?.id && styles.selectedTimeSlotItem,
            ]}
            onPress={() => handleTimeSlotSelect(item)}
        >
            <Text
                style={[
                    styles.timeSlotText,
                    item.id === selectedTimeSlot?.id && styles.selectedTimeSlotText,
                ]}
            >
                {item.time}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a Convenient Time Slot</Text>
            <FlatList
                data={timeSlots}
                renderItem={renderTimeSlotItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.timeSlotList}
            />
            <TouchableOpacity
                style={[
                    styles.scheduleButton,
                    !selectedTimeSlot && styles.disabledScheduleButton,
                ]}
                onPress={() => {
                    if (selectedTimeSlot) {
                        // Handle scheduling logic here
                        console.log('Scheduled Time:', selectedTimeSlot.time);
                    } else {
                        // Show an alert or message indicating no time slot selected
                        alert('Please select a time slot');
                    }
                }}
            >
                <Text style={styles.scheduleButtonText}>Schedule</Text>
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
    timeSlotList: {
        marginTop: 20,
    },
    timeSlotItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    selectedTimeSlotItem: {
        backgroundColor: '#7e104f',
    },
    timeSlotText: {
        color: '#333',
        fontSize: 16,
    },
    selectedTimeSlotText: {
        color: '#fff',
    },
    scheduleButton: {
        backgroundColor: '#7e104f',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    disabledScheduleButton: {
        backgroundColor: '#ccc',
    },
    scheduleButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ConTimeSlot;
