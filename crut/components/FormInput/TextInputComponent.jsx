import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function TextInputComponent({setImageGeneratingPrompt}) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Enter your prompt</Text>
                <Text style={styles.creditText}>1 credit will be deducted for generation</Text>
            </View>

            <TextInput
                placeholder='Describe what you want your create'
                placeholderTextColor='#9CA3AF'
                multiline={true}
                numberOfLines={6}
                style={styles.input}
                onChangeText={(value) => setImageGeneratingPrompt(value)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 1,
    },
    headerContainer: {
        marginBottom: 12,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    creditText: {
        fontSize: 13,
        color: '#6B7280',
        fontWeight: '400',
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        fontSize: 16,
        color: '#1F2937',
        backgroundColor: '#F9FAFB',
        textAlignVertical: 'top',
        minHeight: 150,
    }
});