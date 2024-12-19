import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUploader() {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Upload Reference Image</Text>
                <Text style={styles.creditText}>1 credit will be deducted for generation</Text>
            </View>

            <TouchableOpacity 
                style={styles.uploadArea} 
                onPress={pickImage}
                activeOpacity={0.7}
            >
                {image ? (
                    <Image
                        source={{ uri: image }}
                        style={styles.uploadedImage}
                    />
                ) : (
                    <View style={styles.placeholderContainer}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.uploadIcon}>📸</Text>
                        </View>
                        <Text style={styles.uploadText}>Tap to upload image</Text>
                        <Text style={styles.supportedText}>
                            Supports: JPG, PNG (max 5MB)
                        </Text>
                    </View>
                )}
            </TouchableOpacity>

            {image && (
                <TouchableOpacity 
                    style={styles.generateButton}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Generate Avatar</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
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
    uploadArea: {
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderStyle: 'dashed',
        borderRadius: 12,
        backgroundColor: '#F9FAFB',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        overflow: 'hidden',
    },
    placeholderContainer: {
        alignItems: 'center',
        padding: 20,
    },
    iconContainer: {
        marginBottom: 12,
    },
    uploadIcon: {
        fontSize: 40,
    },
    uploadText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
        marginBottom: 8,
    },
    supportedText: {
        fontSize: 13,
        color: '#6B7280',
    },
    uploadedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    generateButton: {
        backgroundColor: '#543A14',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});