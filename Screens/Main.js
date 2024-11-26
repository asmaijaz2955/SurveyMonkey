import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Main = ({ navigation }) => {
    const navigateToSignUp = (role) => {
        navigation.navigate('CustomerDashboard');
    };
    const navigateToDashboard = (role) => {
        navigation.navigate('ConsultantDashboard');
    };
    const navigateToDashboardAdmin = (role) => {
        navigation.navigate('AdminDashboard');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigateToDashboardAdmin('Admin')}>
                <Icon name="user" size={30} color="#FFFFFF" />
                <Text style={styles.text}>Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToSignUp('Customer')}>
                <EntypoIcon name="users" size={30} color="#FFFFFF" />
                <Text style={styles.text}>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigateToDashboard('Consultant')}>
                <MaterialIcon name="work" size={30} color="#FFFFFF" />
                <Text style={styles.text}>Consultant</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#7e104f',
        borderRadius: 32,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: "#FFFFFF"
    },
});

export default Main;
