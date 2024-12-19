import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import GlobalApi from '../../services/GlobalApi';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.44; // Slightly less than half for padding

export default function AvatarModels() {
    const [avatarList, setAvatarList] = React.useState([]);
    const router = useRouter();

    useEffect(() => {
        getAvatarList();
    }, []);

    const getAvatarList = async () => {
        const response = await GlobalApi.getAvatarList();
        setAvatarList(response.data);
    };

    const handleAvatarPress = (item) => {
        router.push({
            pathname: '/formInput',
            params: item
        })
    };

    const renderAvatarItem = ({ item }) => (
        <TouchableOpacity
            style={styles.avatarCard}
            onPress={() => handleAvatarPress(item)}
            activeOpacity={0.7}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item.banner.url }}
                    style={styles.avatarImage}
                    resizeMode="cover"
                />
                <View style={styles.overlay}>
                    <Text style={styles.createText}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Avatars</Text>
            <FlatList
                data={avatarList}
                renderItem={renderAvatarItem}
                numColumns={2}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
        gap: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#543A14',
        textAlign: 'start',
    },
    listContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        gap: 10
    },
    avatarCard: {
        width: ITEM_WIDTH,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
        height: ITEM_WIDTH * 1.2, // Maintain aspect ratio

    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: 'rgba(84, 58, 20, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    labelContainer: {
        padding: 12,
        alignItems: 'center',
    },
    avatarLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#543A14',
    },
});