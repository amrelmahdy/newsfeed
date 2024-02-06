import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, RefreshControl, StyleSheet, TextInput, Alert, TouchableWithoutFeedback } from 'react-native';
import { getAllNews } from '../../api';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'
import { NewsItem } from '../../types';
import { AppColors } from '../../theme/colors';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../navigation';

function NewsScreen({ navigation }: BottomTabScreenProps<RootStackParamList, 'NewsScreen'>) {
  const colors: AppColors = useTheme().colors as AppColors;
  const styles = styling(colors)
  const { t, i18n } = useTranslation();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    //fetchData();
  }, [])


  const fetchData = async (searcKeyword?: string): Promise<void> => {
    try {
      setRefreshing(true);
      const news: NewsItem[] = await getAllNews(searcKeyword, i18n.language);
      setNewsItems(news);
    } catch (error) {
      Alert.alert('Whoops', "Unable to fetch data please try again later")
    } finally {
      setRefreshing(false);
    }
  }

  const handleRefresh = useCallback(() => {
    fetchData();
  }, []);


  const handlePress = (item: NewsItem) => {
    navigation.navigate('NewsDetailsScreen', {
      ...item
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
          placeholder={t("search_input_placeholder")}
          placeholderTextColor={colors.lightTextColor}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onChange={handleSearch}
        />
      </View>

      <FlatList
        data={newsItems}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => handlePress(item)}>
            <View style={styles.card}>
              {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item, index) => item.url + index.toString()}
        ListEmptyComponent={() => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
          {!refreshing && <Text style={styles.emptyText}>There is now items to show</Text>}
        </View>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#9Bd35A', '#689F38']}
            tintColor={colors.primary}
          />
        }
      />
    </>
  );
}

export default NewsScreen;


const styling = (colors: AppColors) => StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 10,
    marginVertical: 10,
    marginHorizontal: 16,
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
    padding: 16,
  },
  emptyText: {
    color: colors.textColor
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
    borderBottomColor: colors.border,
  },
  searchInput: {
    height: 40,
    color: colors.textColor,
    borderWidth: 1,
    backgroundColor: colors.inputBackgroundColor,
    borderColor: colors.border,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});