import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Schedule = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const showTimePicker = () => {
        setTimePickerVisible(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisible(false);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        hideTimePicker();
    };

    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        showTimePicker();
    };

    const scheduleMeeting = () => {
        if (selectedDate && selectedTime) {
            // Send the scheduled meeting details to the server or perform any required action
            // You can also navigate to a confirmation screen if needed
            console.log('Scheduled Meeting:', selectedDate, selectedTime);
        } else {
            // Show an error or alert if the date and time are not selected
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Schedule a Meeting</Text>
            <TouchableOpacity style={styles.timePickerButton} onPress={showTimePicker}>
                <Text style={styles.timePickerButtonText}>Select Date and Time</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="datetime"
                isDarkModeEnabled={false}
                headerTextIOSStyle={{ color: '#7e104f' }}
                textStyle={{ color: '#7e104f' }}
                onCancel={hideTimePicker}
                onConfirm={handleDateConfirm} // Add this line to handle date selection
            />

            <TouchableOpacity style={styles.scheduleButton} onPress={scheduleMeeting}>
                <Text style={styles.scheduleButtonText}>Schedule Meeting</Text>
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
    timePickerButton: {
        backgroundColor: '#7e104f',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    timePickerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    scheduleButton: {
        backgroundColor: '#7e104f',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    scheduleButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Schedule;
