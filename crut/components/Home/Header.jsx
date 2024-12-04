import { View, Text, Image } from 'react-native';
import React from 'react';
import userDetailContext from '../../context/UserDetailsContext'
import { StyleSheet } from 'react-native';

export default function Header() {
    const { userDetail } = React.useContext(userDetailContext);

    return (
        <View style={styles.header}>
            <Text style={styles.appTitle}>Pictify AI</Text>
            <Text style={styles.credits}>Credits: {userDetail?.credits} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5,
        borderColor: '#543A14',
        borderWidth: 1,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
    },
    credits: {
        fontSize: 15,
        color: '#ffffff',
        backgroundColor: '#543A14',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        fontWeight: 'bold',
    },
})