import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { get } from '../../../storage';
import ThemeContext from '../../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';
import RadioButton from '../../../components/RadioButton/RadioButton';

const AppearanceScreen = () => {
  const colors = useTheme().colors;
  const { theme, toggleTheme, useSystemTheme } = useContext(ThemeContext);
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    getTheme()
  }, [])

  const getTheme = async () => {
    const theme = await get('Theme');
    const isSystemDefault = await get('ThemeSystemDefault');
    if (isSystemDefault) {
      setInitialValue('default');
      return;
    } else {
      setInitialValue(theme);
    }
  }

  const data = [
    {
      text: 'Light Mode',
      key: 'light',
    },
    {
      text: 'Dark Mode',
      key: 'dark',
    },
    {
      text: 'System Default',
      key: 'default',
    }
  ]

  const themeOperations = theme => {
    console.log("themethemethemethemetheme", theme)
    if (theme === 'default') {
      useSystemTheme()
    } else {
      toggleTheme(theme)
    }
  };

  const styles = styling(colors);

  return (
    <View style={styles.container}>
      <RadioButton theme={theme}
        onSelectButton={themeOperations}
        defaultValue={initialValue}
        data={data} />
    </View>
  );
};

export default AppearanceScreen;

const styling = colors =>
  StyleSheet.create({
    container: {
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