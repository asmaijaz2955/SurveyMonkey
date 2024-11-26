import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    userCard: {
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

const userList = [
    {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        areaOfInterest: 'Web Development',
        problems: 'Struggling with responsive design.',
    },
    {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        areaOfInterest: 'Mobile App Development',
        problems: 'Having trouble with integrating third-party APIs.',
    },
    {
        id: '3',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        areaOfInterest: 'Data Science',
        problems: 'Need help cleaning and preprocessing messy data.',
    },
    {
        id: '4',
        name: 'David Lee',
        email: 'david@example.com',
        areaOfInterest: 'UI/UX Design',
        problems: 'Looking for advice on creating engaging user interfaces.',
    },
    {
        id: '5',
        name: 'Eve Williams',
        email: 'eve@example.com',
        areaOfInterest: 'Digital Marketing',
        problems: 'Want to improve social media engagement strategies.',
    },
    {
        id: '6',
        name: 'Frank Miller',
        email: 'frank@example.com',
        areaOfInterest: 'Machine Learning',
        problems: 'Need guidance on selecting appropriate algorithms.',
    },
    {
        id: '7',
        name: 'Grace Taylor',
        email: 'grace@example.com',
        areaOfInterest: 'Content Writing',
        problems: 'Struggling with maintaining consistency in writing style.',
    },
    {
        id: '8',
        name: 'Henry Clark',
        email: 'henry@example.com',
        areaOfInterest: 'Graphic Design',
        problems: 'Looking for tips on using color theory effectively.',
    },
    {
        id: '9',
        name: 'Isabella Martinez',
        email: 'isabella@example.com',
        areaOfInterest: 'Product Management',
        problems: 'Need advice on prioritizing features for a new product.',
    },
    {
        id: '10',
        name: 'Jack Anderson',
        email: 'jack@example.com',
        areaOfInterest: 'Cybersecurity',
        problems: 'Want to enhance network security for small business.',
    },
    // Add more users here
];


const UserList = ({ navigation }) => {
    const renderUser = ({ item }) => (
        <View style={styles.userCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.infoText}>Email: {item.email}</Text>
            <Text style={styles.infoText}>Area of Interest: {item.areaOfInterest}</Text>
            <Text style={styles.infoText}>Problems: {item.problems}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={userList}
                renderItem={renderUser}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UserList;
