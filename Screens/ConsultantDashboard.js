import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConsultantDashboard = ({ navigation }) => {
    const navigateToAppointments = () => {
        // Logic to navigate to the appointment request list screen
        navigation.navigate('ConAppt');
    };

    const navigateToUserProfile = () => {
        // Logic to navigate to the user profile screen
        navigation.navigate('Userprofile');
    };

    const acceptAndScheduleAppointment = () => {
        // Logic to accept and schedule appointments
        navigation.navigate('Appt');
    };

    const initiateVideoCall = () => {
        // Logic to initiate video calls
        navigation.navigate('ConVideo');
    };

    const handlePayment = () => {
        // Logic to handle payments and payment history
        navigation.navigate('PayHis');
    };



    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.feature} onPress={navigateToAppointments}>
                <Icon name="calendar" size={30} color="#7e104f" />
                <Text style={styles.featureText}>Appointment Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feature} onPress={navigateToUserProfile}>
                <Icon name="user" size={30} color="#7e104f" />
                <Text style={styles.featureText}>User Profiles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feature} onPress={acceptAndScheduleAppointment}>
                <Icon name="check" size={30} color="#7e104f" />
                <Text style={styles.featureText}>Accept & Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feature} onPress={initiateVideoCall}>
                <Icon name="video-camera" size={30} color="#7e104f" />
                <Text style={styles.featureText}>Initiate Video Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feature} onPress={handlePayment}>
                <Icon name="credit-card" size={30} color="#7e104f" />
                <Text style={styles.featureText}>Payment & History</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.feature} onPress={viewAppointmentHistory}>
                <Icon name="history" size={30} color="#7e104f" />
                <Text style={styles.featureText}>Appointment History</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    featureText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#7e104f',
    },
});

export default ConsultantDashboard;
