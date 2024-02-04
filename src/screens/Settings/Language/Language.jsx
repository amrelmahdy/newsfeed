import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { get, save } from '../../../storage';
import RadioButtonRN from 'radio-buttons-react-native';
import ThemeContext from '../../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'


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
    const savedLang = data.find(la => la.value == lang) || 1;
    setInitialValue(savedLang.id);
  }


  const data = [
    {
      id: 1,
      label: 'English',
      value: 'en',
    },
    {
      id: 2,
      label: 'French',
      value: 'fr',
    },
    {
      id: 3,
      label: 'Deutsch',
      value: 'de',
    },
    {
      id: 4,
      label: 'Italian',
      value: 'it',
    },
    {
      id: 5,
      label: 'Spanish',
      value: 'es',
    }
  ]

  const themeOperations = lang => {
    i18n.changeLanguage(lang);
    // const language = data.find(la => la.value == lang) || 1;
    // setInitialValue(language.id)
    save("Language", lang)
  };


  console.log(initialValue)

  const styles = styling(colors);


  return (
    <View style={styles.container}>
      <RadioButtonRN
        data={data}
        selectedBtn={e => themeOperations(e?.value)}
        initial={initialValue}
        activeColor={colors.activeColor}
        deactiveColor={colors.deactiveColor}
        boxActiveBgColor={colors.boxActiveColor}
        boxDeactiveBgColor={colors.themeColor}
        textColor={colors.textColor}
      />
    </View>
  );
};

export default LanguageScreen;

const styling = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.themeColor,
      paddingHorizontal: 20,
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