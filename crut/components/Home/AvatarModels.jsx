import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import GlobalApi from '../../services/GlobalApi';

export default function AvatarModels() {

    const [avatarList, setAvatarList] = React.useState([]);

    useEffect(() => {
        getAvatarList();
    }, []);

    const getAvatarList = async () => { 

        const response = await GlobalApi.getAvatarList();
        setAvatarList(response.data);

    }


  return (
    <View style={styles.container}>
          <FlatList
            data={avatarList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            )}
          />
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  item: {
    backgroundColor: '#543A14',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});