import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'
import { SettingsItem } from '../../types';
import { AppColors } from '../../theme/colors';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../navigation';

const SettingsScreen = ({ navigation }: BottomTabScreenProps<RootStackParamList, 'SettingsScreen'>) => {
  const colors: AppColors = useTheme().colors as AppColors;
  const { theme, isSystemDefault } = useContext(ThemeContext);
  const styles = styling(colors);
  const { t, i18n } = useTranslation();

  const data: SettingsItem[] = [
    { name: t('appearance'), icon: 'dark-mode', value: isSystemDefault ? 'System Default' : theme, action: () => navigation.navigate('AppearanceScreen') },
    { name: t('lang'), icon: 'language', value: i18n.language, action: () => navigation.navigate('LanguageScreen') },
  ];

  const renderItem = ({ item }: { item: SettingsItem }) => (
    <TouchableOpacity onPress={item.action} style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
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
        keyExtractor={(item, index) => item.value + index || index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default SettingsScreen

const styling = (colors: AppColors) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
  },
});
