import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator, RefreshControl, StyleSheet, TextInput, Alert } from 'react-native';
import { getAllNews } from '../../api';
import { useTheme } from '@react-navigation/native';

function NewsScreen({ navigation }) {
  const colors = useTheme().colors

  const [newsItems, setNewsItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const styles = styling(colors)

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async (searcKeyword) => {
    try {
      setRefreshing(true);
      const news = await getAllNews(searcKeyword);
      setNewsItems(news);
    } catch (error) {
      Alert.alert('Whoops',
        "Unable to fetch data please try again later",
        [
          {
            text: 'Try again ?!',
            onPress: () => fetchData(searcKeyword),
          }
        ],
        { cancelable: true }
      )
    } finally {
      setRefreshing(false);
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
          placeholderTextColor={colors.lightTextColor}
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


const styling = colors => StyleSheet.create({
  card: {
    backgroundColor: colors.card,
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
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: colors.textColor,
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: colors.textColor,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});