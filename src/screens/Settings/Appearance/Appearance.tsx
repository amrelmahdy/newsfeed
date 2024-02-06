import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { get } from '../../../storage';
import ThemeContext from '../../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';
import RadioButton from '../../../components/RadioButton/RadioButton';
import { AppColors } from '../../../theme/colors';
import { THEME_BUTTONS } from '../../../data.factory';

const AppearanceScreen = () => {
  const colors: AppColors = useTheme().colors as AppColors;
  const { toggleTheme, useSystemTheme } = useContext(ThemeContext);
  const [initialValue, setInitialValue] = useState<string>('light');

  useEffect(() => {
    getTheme()
  }, [])

  const getTheme = async () => {
    const theme: string = await get('Theme') || 'en';
    const isSystemDefault = await get('ThemeSystemDefault');
    if (isSystemDefault) {
      setInitialValue('default');
      return;
    } else {
      setInitialValue(theme);
    }
  }

  const themeOperations = (theme: string) => {
    if (theme === 'default') {
      useSystemTheme()
    } else {
      toggleTheme(theme)
    }
  };

  const styles = styling(colors);

  return (
    <View style={styles.container}>
      <RadioButton
        onSelectButton={themeOperations}
        defaultValue={initialValue}
        data={THEME_BUTTONS} />
    </View>
  );
};

export default AppearanceScreen;

const styling = (colors: AppColors) =>
  StyleSheet.create({
    container: {
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