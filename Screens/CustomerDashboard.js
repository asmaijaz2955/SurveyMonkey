import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';
const CustomerDashboard = ({ navigation }) => {
    const navigateToConsultants = () => {
        // Navigate to consultants screen
        navigation.navigate('Consultant');
    };
    const openMallOfKorangWebsite = async () => {
        const url = 'https://www.alsafamarketing.pk'; // Replace with the actual website URL
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log("Can't open URL:", url);
        }
    };
    const navigateToScheduleMeeting = () => {
        // Navigate to schedule meeting screen
        navigation.navigate('Schedule');
    };

    const navigateToChat = () => {
        // Navigate to chat screen
        navigation.navigate('Chat');
    };
    const navigateToVideoCall = () => {
        // Navigate to chat screen
        navigation.navigate('VideoCall');
    };
    const navigateToPayment = () => {
        // Navigate to chat screen
        navigation.navigate('Payment');
    };

    const navigateToConTimeSlot = () => {
        // Navigate to chat screen
        navigation.navigate('ConTimeSlot');
    };
    // Other state and functions
    const navigateToPaymentHistory = () => {
        // Navigate to payment history screen
        navigation.navigate('PaymentHistory');
    };

    const navigateToServices = () => {
        // Navigate to services screen
        navigation.navigate('Services');
    };

    const navigateToAppointments = () => {
        // Navigate to appointments screen
        navigation.navigate('Appointments');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView contentContainerStyle={styles.featureScrollContainer} horizontal={true}>
                {/* Dashboard Features */}
                <View style={styles.featureContainer}>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToConsultants}>
                        <Icon name="users" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Consultants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToScheduleMeeting}>
                        <Icon name="calendar" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Schedule Meeting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToChat}>
                        <Icon name="comments" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToConTimeSlot} >
                        <Icon name="clock-o" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Convenient Time Slot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToVideoCall} >
                        <Icon name="video-camera" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Video Calls</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToPayment}>
                        <Icon name="credit-card" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Payment</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToPaymentHistory}>
                        <Icon name="history" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Payment History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToServices}>
                        <Icon name="briefcase" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureIconContainer} onPress={navigateToAppointments}>
                        <Icon name="calendar" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Appointments</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <ScrollView contentContainerStyle={styles.marketingScrollContainer} horizontal={true}>
                {/* Marketing Features */}
                <View style={styles.marketingContainer}>
                    {/* ... Marketing feature components ... */}
                    {/* Marketing Features */}
                    <TouchableOpacity style={styles.marketingIconContainer} onPress={openMallOfKorangWebsite} >
                        <Icon name="bullhorn" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>Marketing</Text>
                    </TouchableOpacity>
                </View>

                {/* Other Marketing Features */}
                <View style={styles.otherMarketingContainer}>
                    <TouchableOpacity style={styles.marketingIconContainer} onPress={openMallOfKorangWebsite}>
                        <Icon name="shopping-bag" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>MALL OF KORANG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.marketingIconContainer} onPress={openMallOfKorangWebsite}>
                        <Icon name="building" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>TOWN ONEAL BARKA HEIGHTS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.marketingIconContainer} onPress={openMallOfKorangWebsite}>
                        <Icon name="home" size={30} color='#7e104f' />
                        <Text style={styles.featureText}>RESIDENTIAL GARDEN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#FFFFFF"
    },
    // Other styles
    featureContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    marketingContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        paddingTop: 20,
        paddingBottom: 20,
    },
    featureScrollContainer: {
        flexGrow: 1,
    },
    marketingScrollContainer: {
        flexGrow: 1,
    },
    otherMarketingContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    featureIconContainer: {
        alignItems: 'center',
        paddingHorizontal: 20, // Add horizontal padding for spacing
    },
    marketingIconContainer: {
        alignItems: 'center',
        paddingHorizontal: 20, // Add horizontal padding for spacing
    },
    featureText: {
        marginTop: 5,
        fontSize: 16,
        color: '#7e104f'
    },
});

export default CustomerDashboard;
