import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuItemText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
});

const AdminDashboard = ({ navigation }) => {
    const navigateToAddAdmin = () => {
        // Logic to navigate to the AddAdmin screen
        navigation.navigate('AddAdmin');
    };
    const navigateToApprove = () => {
        // Logic to navigate to the AddAdmin screen
        navigation.navigate('Approve');
    };
    const navigateToUser = () => {
        // Logic to navigate to the AddAdmin screen
        navigation.navigate('UserList');
    };
    const navigateToLstCon = () => {
        // Logic to navigate to the AddAdmin screen
        navigation.navigate('LstCon');
    };
    const navigateToServicesLst = () => {
        // Logic to navigate to the AddAdmin screen
        navigation.navigate('Serviceslst');
    };
    const navigateToTransactions = () => {
        // Logic to navigate to the AddAdmin screen
        navigation.navigate('Transactions');
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Admin Management</Text>
            <TouchableOpacity style={styles.menuItem} onPress={navigateToAddAdmin}>
                <Icon name="person-add" size={30} color="#7e104f" />
                <Text style={styles.menuItemText}>Add Admin</Text>
            </TouchableOpacity>
            {/* Add more admin management features here */}
            <Text style={styles.sectionTitle}>Registration Approval</Text>
            <TouchableOpacity style={styles.menuItem} onPress={navigateToApprove}>
                <Icon name="check-circle" size={30} color="#7e104f" />
                <Text style={styles.menuItemText}>Approve Registrations</Text>
            </TouchableOpacity>
            {/* Add more approval features here */}
            <Text style={styles.sectionTitle}>User Management</Text>
            <TouchableOpacity style={styles.menuItem} onPress={navigateToUser}>
                <Icon name="people" size={30} color="#7e104f" />
                <Text style={styles.menuItemText}>List of Users</Text>
            </TouchableOpacity>
            {/* Add more user management features here */}
            <Text style={styles.sectionTitle}>Consultant Management</Text>
            <TouchableOpacity style={styles.menuItem} onPress={navigateToLstCon}>
                <Icon name="people" size={30} color="#7e104f" />
                <Text style={styles.menuItemText}>List of Consultants</Text>
            </TouchableOpacity>
            {/* Add more consultant management features here */}
            <Text style={styles.sectionTitle}>Service Management</Text>
            <TouchableOpacity style={styles.menuItem} onPress={navigateToServicesLst}>
                <Icon name="list" size={30} color="#7e104f" />
                <Text style={styles.menuItemText}>List of Services</Text>
            </TouchableOpacity>
            {/* Add more service management features here */}
            <Text style={styles.sectionTitle}>Transaction History</Text>
            <TouchableOpacity style={styles.menuItem} onPress={navigateToTransactions} >
                <Icon name="history" size={30} color="#7e104f" />
                <Text style={styles.menuItemText}>Transaction History</Text>
            </TouchableOpacity>
            {/* Add more transaction history features here */}
        </ScrollView>
    );
};

export default AdminDashboard;
