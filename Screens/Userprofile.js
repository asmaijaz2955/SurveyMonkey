import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    profileCard: {
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

const users = [
    {
        id: '1',
        name: 'Alice Johnson',
        areaOfInterest: 'Web Development',
        problems: 'Struggling with responsive design.',
    },
    {
        id: '2',
        name: 'Bob Smith',
        areaOfInterest: 'Mobile App Development',
        problems: 'Having trouble with integrating third-party APIs.',
    },
    {
        id: '3',
        name: 'Charlie Brown',
        areaOfInterest: 'Data Science',
        problems: 'Need help cleaning and preprocessing messy data.',
    },
    {
        id: '4',
        name: 'David Lee',
        areaOfInterest: 'UI/UX Design',
        problems: 'Looking for advice on creating engaging user interfaces.',
    },
    {
        id: '5',
        name: 'Eve Williams',
        areaOfInterest: 'Digital Marketing',
        problems: 'Want to improve social media engagement strategies.',
    },
    {
        id: '6',
        name: 'Frank Miller',
        areaOfInterest: 'Machine Learning',
        problems: 'Need guidance on selecting appropriate algorithms.',
    },
    {
        id: '7',
        name: 'Grace Taylor',
        areaOfInterest: 'Content Writing',
        problems: 'Struggling with maintaining consistency in writing style.',
    },
    {
        id: '8',
        name: 'Henry Clark',
        areaOfInterest: 'Graphic Design',
        problems: 'Looking for tips on using color theory effectively.',
    },
    {
        id: '9',
        name: 'Isabella Martinez',
        areaOfInterest: 'Product Management',
        problems: 'Need advice on prioritizing features for a new product.',
    },
    {
        id: '10',
        name: 'Jack Anderson',
        areaOfInterest: 'Cybersecurity',
        problems: 'Want to enhance network security for small business.',
    },
];

const Userprofile = ({ navigation }) => {
    const renderProfile = ({ item }) => (
        <View style={styles.profileCard}>
            <Icon name="user" size={24} color="#7e104f" style={styles.icon} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.infoText}>Area of Interest: {item.areaOfInterest}</Text>
            <Text style={styles.infoText}>Problems: {item.problems}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderProfile}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Userprofile;
