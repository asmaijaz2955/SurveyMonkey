import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const services = [
    {
        category: 'Social Media Marketing',
        subcategories: [
            'Social Media Marketing',
            'Paid Social Marketing',
            'Influencer Marketing',
            'Community Marketing',
        ],
    },
    {
        category: 'Methods and Techniques',
        subcategories: [
            'Video Marketing',
            'E-commerce Marketing',
            'Email Marketing',
            'Guest Posting',
            'Display Advertising',
            'Text Messages Marketing',
        ],
    },
    {
        category: 'Analytics and Strategy',
        subcategories: ['Marketing Strategy', 'Marketing Advice', 'Web Analytics'],
    },
    {
        category: 'Industry and Purpose-Specific',
        subcategories: ['Music Promotion', 'Podcast Marketing', 'Mobile App Marketing'],
    },
    {
        category: 'Miscellaneous',
        subcategories: ['Crowdfunding', 'Other'],
    },
];

const Serviceslst = ({ navigation }) => {
    const renderCategory = ({ item }) => (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.category}</Text>
            <FlatList
                data={item.subcategories}
                keyExtractor={(subcategory) => subcategory}
                renderItem={({ item }) => <Text style={styles.subcategory}>{item}</Text>}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={services}
                keyExtractor={(category) => category.category}
                renderItem={renderCategory}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    categoryContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        padding: 10,
    },
    categoryTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subcategory: {
        marginLeft: 10,
        marginBottom: 5,
    },
});

export default Serviceslst;
