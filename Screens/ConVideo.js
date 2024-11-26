import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RTCView } from 'react-native-webrtc';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    rtcView: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 30,
    },
});

const ConVideo = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <RTCView streamURL={null} style={styles.rtcView} /> Replace null with the actual stream URL */}
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="mic-off" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="call-end" size={30} color="red" onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="videocam-off" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ConVideo;
