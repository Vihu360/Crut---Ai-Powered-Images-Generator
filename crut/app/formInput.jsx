import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ImageUploadComponent from '../components/FormInput/ImageUploadComponent';
import TextInputComponent from '../components/FormInput/TextInputComponent';

export default function FormInput() {

    const [listData, setListData] = React.useState([]);
    const [imageGeneratingPrompt, setImageGeneratingPrompt] = React.useState();

    const params = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        setListData(params);
        navigation.setOptions({ headerShown: true, title: params.name });
    }, []);

    const generatepress = () => {
        console.log(imageGeneratingPrompt)
    }

    return (
        <View style={{ flex: 1, padding: 30, height: '100%' }}>
            <View>

                {listData?.userImageUpload != "true" ?
                    <TextInputComponent setImageGeneratingPrompt={(value) => setImageGeneratingPrompt(value)} /> :
                    <ImageUploadComponent />}

                <TouchableOpacity
                    onPress={generatepress}
                    style={styles.generateButton}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Generate</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})