import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'

const SettingsScreen = ({ navigation }) => {
  const colors = useTheme().colors
  const { theme, isSystemDefault } = useContext(ThemeContext);
  const { t, i18n } = useTranslation()

  const data = [
    { screenName: 'AppearanceScreen', name: 'Appearance', icon: 'dark-mode', value: isSystemDefault ? 'System Default' : theme },
    { screenName: 'LanguageScreen', name: 'Language', icon: 'language', value: i18n.language },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate(item.screenName, {});
    }} style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name={item.icon} size={20} style={{ marginRight: 10 }} color={colors.icon} />
        <Text style={{ color: colors.textColor }}>{item.name}</Text>
      </View>
      <Text style={{ color: colors.textColor }}>{item.value} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id || index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
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
