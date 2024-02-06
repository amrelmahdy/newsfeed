import React, {  useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { get, save } from '../../../storage';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'
import RadioButton from '../../../components/RadioButton/RadioButton';
import { AppColors } from '../../../theme/colors';
import { Language } from '../../../types';
import { LANGUAGES } from '../../../data.factory';

const LanguageScreen = () => {
  const colors: AppColors = useTheme().colors as AppColors;
  const styles = styling(colors);
  const [initialValue, setInitialValue] = useState<string>('en');
  const { i18n } = useTranslation()
  useEffect(() => {
    getLanguage();
  }, [])

  const getLanguage = async () => {
    const lang: string = await get('Language') || 'en';
    i18n.changeLanguage(lang);
    const savedLang: Language | undefined = LANGUAGES.find(la => la.key == lang);
    savedLang && setInitialValue(savedLang.key);
  }

  const handleChangeLangue = (lang: string) => {
    i18n.changeLanguage(lang);
    save("Language", lang)
  };

  return (
    <View style={styles.container}>
      <RadioButton
        onSelectButton={handleChangeLangue}
        defaultValue={initialValue}
        data={LANGUAGES}
      />
    </View>
  );
};

export default LanguageScreen;

const styling = (colors: AppColors) =>
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
      borderColor: colors.border,
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
      width: '100%',
      marginTop: 20,
      color: colors.textColor,
    }
  });