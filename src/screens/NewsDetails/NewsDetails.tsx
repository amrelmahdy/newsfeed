import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';



type NewsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetailsScreen'>;

interface NewsDetailsProps {
  route: NewsDetailsScreenRouteProp;
}



const NewsDetailsScreen = ({ route }: NewsDetailsProps) => {
  const { title, description, content, urlToImage } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    color: '#666',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NewsDetailsScreen;

