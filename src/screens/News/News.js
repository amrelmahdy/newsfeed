import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator, RefreshControl, StyleSheet, TextInput, Alert } from 'react-native';
import { getAllNews } from '../../api';
import styles from './styles'

function NewsScreen({ navigation }) {
  const [newsItems, setNewsItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async (searcKeyword) => {
    try {
      setRefreshing(true);
      const news = await getAllNews(searcKeyword);
      setNewsItems(news);
    } catch (error) {
      // Alert.alert('Whoops',
      //   "Unable to fetch data please try again later",
      //   [
      //     {
      //       text: 'Try again ?!',
      //       onPress: () => fetchData(searcKeyword),
      //     }
      //   ],
      //   { cancelable: true }
      // )
    } finally {
      setRefreshing(false); // Stop refreshing indicator
    }
  }

  const handleRefresh = useCallback(() => {
    fetchData();
  }, []);


  const handlePress = (item) => {
    const { title, description, content, urlToImage } = item;
    navigation.navigate('NewsDetailsScreen', {
      title, description, content, urlToImage
    });
  };


  const handleSearch = async () => {
    try {
      setRefreshing(true);
      await fetchData(searchQuery);
    } catch (error) {
      console.error('Error searching news:', error);
    } finally {
      setRefreshing(false);
    }
  }

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search articles..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onChange={handleSearch}
        />
      </View>

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