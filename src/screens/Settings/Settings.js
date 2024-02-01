import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = ({ navigation }) => {
  const data = [
    { screenName: 'AppearanceScreen', name: 'Appearance', icon: 'moon-o', value: 'Systemdd Default' },
    { screenName: 'LanguageScreen', name: 'Language', icon: 'language', value: 'en' },
  ];

  // Function to render each item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate(item.screenName, {});
    }} style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name={item.icon} size={20} style={{ marginRight: 5 }} />
        <Text>{item.name}</Text>
      </View>
      <Text style={{ color: '#888' }}>{ item.value }</Text>
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
