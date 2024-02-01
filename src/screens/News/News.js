import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { getAllNews } from '../../api';
import styles from './styles'

function NewsScreen({ navigation }) {

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


  const handlePress = (item) => {
    const { title, description, content, urlToImage } = item;
    navigation.navigate('NewsDetails', {
      title, description, content, urlToImage
    });
  };

  return (
    <>
      <FlatList
        data={newsItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.card}>
              <Image source={{ uri: item.urlToImage }} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.url}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#9Bd35A', '#689F38']}
            tintColor="#689F38"
          />
        }
      />
    </>
  );
}

export default NewsScreen;
