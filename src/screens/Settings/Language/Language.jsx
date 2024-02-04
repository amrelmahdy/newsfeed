import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { get, save } from '../../../storage';
import ThemeContext from '../../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'
import RadioButton from '../../../components/RadioButton/RadioButton';


const LanguageScreen = () => {
  const colors = useTheme().colors
  const { toggleTheme, useSystemTheme } = useContext(ThemeContext);
  const [initialValue, setInitialValue] = useState(0);
  const { t, i18n } = useTranslation()
  useEffect(() => {
    getLanguage();
  }, [])

  const getLanguage = async () => {
    const lang = await get('Language');
    i18n.changeLanguage(lang);
    const savedLang = data.find(la => la.key == lang);
    setInitialValue(savedLang.key);
  }


  const data = [
    {
      text: 'English',
      key: 'en',
    },
    {
      text: 'French',
      key: 'fr',
    },
    {
      text: 'Deutsch',
      key: 'de',
    },
    {
      text: 'Italian',
      key: 'it',
    },
    {
      text: 'Spanish',
      key: 'es',
    }
  ]

  const handleChangeLangue = lang => {
    i18n.changeLanguage(lang);
    save("Language", lang)
  };


  const styles = styling(colors);


  return (
    <View style={styles.container}>
      <RadioButton
        onSelectButton={handleChangeLangue}
        defaultValue={initialValue}
        data={data}
      />
    </View>
  );
};

export default LanguageScreen;

const styling = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 10
    },
    textStyle: {
      color: colors.textColor,
    },
    textInputStyle: {
      borderColor: colors.gray,
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
      width: '100%',
      marginTop: 20,
      color: colors.textColor,
    }
  });