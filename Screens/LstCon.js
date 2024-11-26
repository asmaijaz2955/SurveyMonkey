import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    consultantCard: {
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

const consultantList = [
    {
        id: '1',
        name: 'Alice Johnson',
        expertise: 'Web Development',
        experience: '5 years',
        bio: 'Passionate about creating responsive and user-friendly websites.',
    },
    {
        id: '2',
        name: 'Bob Smith',
        expertise: 'Mobile App Development',
        experience: '4 years',
        bio: 'Experienced in building cross-platform mobile applications.',
    },
    {
        id: '3',
        name: 'Charlie Brown',
        expertise: 'Data Science',
        experience: '3 years',
        bio: 'Analyzing data to extract valuable insights and trends.',
    },
    {
        id: '4',
        name: 'David Lee',
        expertise: 'UI/UX Design',
        experience: '6 years',
        bio: 'Creating visually appealing and intuitive user interfaces.',
    },
    {
        id: '5',
        name: 'Eve Williams',
        expertise: 'Digital Marketing',
        experience: '4 years',
        bio: 'Developing effective online marketing strategies.',
    },
    {
        id: '6',
        name: 'Frank Miller',
        expertise: 'Machine Learning',
        experience: '5 years',
        bio: 'Building machine learning models for predictive analysis.',
    },
    {
        id: '7',
        name: 'Grace Taylor',
        expertise: 'Content Writing',
        experience: '3 years',
        bio: 'Crafting compelling and engaging written content.',
    },
    {
        id: '8',
        name: 'Henry Clark',
        expertise: 'Graphic Design',
        experience: '4 years',
        bio: 'Creating visually stunning graphics and illustrations.',
    },
    {
        id: '9',
        name: 'Isabella Martinez',
        expertise: 'Product Management',
        experience: '6 years',
        bio: 'Leading product development and innovation.',
    },
    {
        id: '10',
        name: 'Jack Anderson',
        expertise: 'Cybersecurity',
        experience: '7 years',
        bio: 'Ensuring digital security and protecting against threats.',
    },
    // Add more consultants here
];


const LstCon = ({ navigation }) => {
    const renderConsultant = ({ item }) => (
        <View style={styles.consultantCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.infoText}>Expertise: {item.expertise}</Text>
            <Text style={styles.infoText}>Experience: {item.experience}</Text>
            <Text style={styles.infoText}>Bio: {item.bio}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={consultantList}
                renderItem={renderConsultant}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default LstCon;
