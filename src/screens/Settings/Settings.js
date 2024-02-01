import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const data = [
    { screenName: 'AppearanceScreen', name: 'Appearance' },
    { screenName: 'LanguageScreen', name: 'Language' },
  ];

  // Function to render each item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate(item.screenName, {});
    }} style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{item.name}</Text>
      <Text>System Default</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

export default SettingsScreen
