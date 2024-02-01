import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { getAllNews } from '../../api';

function NewScreen() {

  const [newsItems, setNewsItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    try {
      setRefreshing(true); // Start refreshing indicator
      const news = await getAllNews();
      setNewsItems(news);
    } catch (error) {
      // Handle error
    } finally {
      setRefreshing(false); // Stop refreshing indicator
    }
  }

  const handleRefresh = useCallback(() => {
    fetchData();
  }, []);

  const handlePress = (url: string) => {
   
  }

  return (
    <>
      <FlatList
        data={newsItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.url)}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Image source={{ uri: item.urlToImage }} style={{ width: '100%', height: 200, marginTop: 10 }} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.url}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
    </>
  );
}

export default NewScreen;
