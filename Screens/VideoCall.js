import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VideoCall = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                {/* Replace this with the actual video call component */}
                <Text style={styles.videoPlaceholder}>Video Stream Here</Text>
            </View>
            <View style={styles.callControls}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="videocam-off" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.endCallButton}>
                    <Icon name="call-end" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="mic-off" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlaceholder: {
        color: '#fff',
        fontSize: 18,
    },
    callControls: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        marginHorizontal: 20,
    },
    endCallButton: {
        backgroundColor: '#ff6347',
        padding: 10,
        borderRadius: 50,
    },
});

export default VideoCall;
