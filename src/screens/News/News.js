import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { getAllNews } from '../../api';

function NewsScreen() {

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
    // Handle press action, e.g., navigate to full article
  }

  return (
    <>
      <FlatList
        data={newsItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.url)}>
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200, // Adjust this value as needed
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#666',
  },
});

export default NewsScreen;
