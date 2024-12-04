import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import GlobalApi from '../../services/GlobalApi';

export default function AiFeaturemodels() {
  const [listData, setListData] = React.useState([]);

  useEffect(() => {
    GetAifeaturedModellist();
  }, []);

  const GetAifeaturedModellist = async () => {
    console.log("api hitting");
    const response = await GlobalApi.getFeaturedList();
    setListData(response.data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
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
