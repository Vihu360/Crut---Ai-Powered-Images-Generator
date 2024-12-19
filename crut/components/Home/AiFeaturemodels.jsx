import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import GlobalApi from '../../services/GlobalApi';
import { useRouter } from 'expo-router';

export default function AiFeaturemodels() {
  const [listData, setListData] = React.useState([]);
  const router = useRouter();

  useEffect(() => {
    GetAifeaturedModellist();
  }, []);

  const GetAifeaturedModellist = async () => {
    console.log("api hitting");
    const response = await GlobalApi.getFeaturedList();
    setListData(response.data);
  };

  const handlePress = (item) => {
    router.push({
      pathname: '/formInput',
      params: item
    })
  };

  return (
    <FlatList
      data={listData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

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
