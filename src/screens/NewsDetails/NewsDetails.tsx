import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AppColors } from '../../theme/colors';
import { RootStackParamList } from '../../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const NewsDetailsScreen = ({ route }: NativeStackScreenProps<RootStackParamList, 'NewsDetailsScreen'>) => {
  const colors: AppColors = useTheme().colors as AppColors;
  const styles = styling(colors)
  const { title, author, description, content, urlToImage, publishedAt } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 10, }}>
        <Text style={styles.metaKey}>By </Text>
        <Text style={styles.metaValue}>{author}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 10, }}>
        <Text style={styles.metaKey}>Updated </Text>
        <Text style={styles.metaValue}>{publishedAt}</Text>
      </View>
      {urlToImage && <Image testID='news-image' source={{ uri: urlToImage }} style={styles.image} />}
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  )
};

const styling = (colors: AppColors) => StyleSheet.create({
  container: {
    flex: 1
  },
  metaKey: {
    fontSize: 11,
    color: colors.lightTextColor,
  },
  metaValue: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.lightTextColor
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    color: colors.textColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  description: {
    marginBottom: 10,
    color: colors.textColor,
    paddingHorizontal: 10
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10
  },
});

export default NewsDetailsScreen;

