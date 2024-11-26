import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Services = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

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
            subcategories: [
                'Marketing Strategy',
                'Marketing Advice',
                'Web Analytics',
            ],
        },
        {
            category: 'Industry and Purpose-Specific',
            subcategories: [
                'Music Promotion',
                'Podcast Marketing',
                'Mobile App Marketing',
            ],
        },
        {
            category: 'Miscellaneous',
            subcategories: [
                'Crowdfunding',
                'Other',
            ],
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Marketing Services</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search for services..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />

            {services.map((category) => (
                <View key={category.category} style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>{category.category}</Text>
                    {category.subcategories.map((subcategory) => (
                        <View key={subcategory} style={styles.subcategoryItem}>
                            <Icon name="circle" size={12} color="#7e104f" />
                            <Text style={styles.subcategoryText}>{subcategory}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#7e104f',
    },
    subcategoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    subcategoryText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default Services;
