
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [expertiseArea, setExpertiseArea] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');

    const [selectedRole, setSelectedRole] = useState('no'); // Default role: customer

    // Function to handle the sign-up process
    const handleSignUp = () => {
        // Implement your sign-up logic here
        // You can use the state variables (username, email, password, etc.)
        // Don't forget to include the selected role (selectedRole) in your API call
    };

    // Function to render extra fields based on selected role
    const renderExtraFields = () => {
        if (selectedRole === 'admin') {
            return (
                <View style={styles.inputView}>
                    <Icon name="user" size={30} color="#660000" style={styles.inputIcon} />
                    {/* Render admin fields */}
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    {/* Other admin fields */}
                </View>
            );
        } else if (selectedRole === 'consultant') {
            return (
                <>
                    {/* Consultant fields */}
                    {/* ... */}
                    {/* For Consultant */}
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Expertise Area"
                            value={expertiseArea}
                            onChangeText={setExpertiseArea}
                        />
                        <Icon name="briefcase" size={30} color="#660000" style={styles.inputIcon} />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Hourly Rate"
                            value={hourlyRate}
                            onChangeText={setHourlyRate}
                        />
                        <Icon name="money" size={30} color="#660000" style={styles.inputIcon} />
                    </View>


                </>
            );
        }
        else if (selectedRole === 'customer') {
            return (
                <>
                    {/* Consultant fields */}
                    {/* ... */}

                    {/* For Customer */}
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Contact Number"
                            value={contactNumber}
                            onChangeText={setContactNumber}
                        />
                        <Icon name="phone" size={30} color="#660000" style={styles.inputIcon} />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            value={address}
                            onChangeText={setAddress}
                        />
                        <Icon name="address-card" size={30} color="#660000" style={styles.inputIcon} />
                    </View>

                </>
            );
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.createAccountContainer}>
                <Text style={styles.createAccountHeader}>Create Account</Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Icon name="user" size={30} color="#660000" style={styles.inputIcon} />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Icon name="envelope" size={30} color="#660000" style={styles.inputIcon} />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Ant name="eye" size={30} color="#660000" style={styles.inputIcon} />
                </View>

                {/* Role Selection Dropdown */}
                <View style={styles.inputView}>
                    <Icon name="user" size={30} color="#660000" style={styles.inputIcon} />
                    <Picker
                        selectedValue={selectedRole}
                        onValueChange={(itemValue, itemIndex) => {
                            console.log('Selected value:', itemValue);
                            setSelectedRole(itemValue);
                        }}
                        style={styles.picker} // Apply styles to the Picker itself
                        itemStyle={styles.pickerItem} // Apply styles to each item in the dropdown
                    >
                        <Picker.Item label="Select Role" value="no" />
                        <Picker.Item label="Admin" value="admin" />
                        <Picker.Item label="Consultant" value="consultant" />
                        <Picker.Item label="Customer" value="customer" />
                    </Picker>
                </View>
                {/* Render extra fields based on selected role */}
                {renderExtraFields()}
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    createAccountContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    createAccountHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#7e104f',
        marginBottom: 20,
        textAlign: 'center',
    },
    picker: {
        flex: 1,
        color: '#7e104f', // Set the color of the selected item in the dropdown
    },
    pickerItem: {
        color: '#7e104f', // Set the color of each item in the dropdown
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#7e104f',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    input: {
        flex: 1,
        color: '#7e104f',
    },
    inputIcon: {
        marginLeft: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#7e104f',
        borderRadius: 32,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFFFFF",
    },
});

export default SignUp;
