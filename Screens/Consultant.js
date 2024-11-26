import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Consultant = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [consultants, setConsultants] = useState([
        {
            id: 1,
            name: 'John Doe',
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 3.8,
        },
        {
            id: 3,
            name: 'John Doe',
            rating: 4.5,
        },
        {
            id: 4,
            name: 'Jane Smith',
            rating: 3.8,
        },
        {
            id: 5,
            name: 'John Doe',
            rating: 4.5,
        },
        {
            id: 6,
            name: 'Jane Smith',
            rating: 3.8,
        },
        // Add more consultant data here
    ]);

    const filteredConsultants = consultants.filter(consultant =>
        consultant.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const ConsultantItem = ({ consultant }) => {
        return (
            <View style={styles.container}>
                <Icon name="user-circle" size={50} color='#7e104f' style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.name}>{consultant.name}</Text>
                    <Text style={styles.rating}>Rating: {consultant.rating}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.screen}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search consultants..."
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />
            <FlatList
                data={filteredConsultants}
                renderItem={({ item }) => <ConsultantItem consultant={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
    },
    searchInput: {
        marginBottom: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 14,
        color: '#888',
    },
});

export default Consultant;
