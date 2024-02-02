import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { get } from '../../../storage';
import RadioButtonRN from 'radio-buttons-react-native';
import ThemeContext from '../../../theme/ThemeContext';
import { useTheme } from '@react-navigation/native';

const AppearanceScreen = () => {
  const colors = useTheme().colors
  const { toggleTheme, useSystemTheme } = useContext(ThemeContext);
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    getTheme()
  }, [])

  const getTheme = async () => {
    const theme = await get('Theme');
    const isSystemDefault = await get('ThemeSystemDefault');
    if(isSystemDefault){
      setInitialValue(3);
      return;
    } else {
      switch (theme) {
        case 'dark':
          setInitialValue(2);
          return;
        case 'light':
          setInitialValue(1);
          return;
        case 'default':
          setInitialValue(3);
          return;
      }
    }
  }


  const data = [
    {
      label: 'Light Mode',
      value: 'light',
    },
    {
      label: 'Dark Mode',
      value: 'dark',
    },
    {
      label: 'System Default',
      value: 'default',
    }
  ]

  const themeOperations = theme => {
    if (theme === 'default') {
      useSystemTheme()
    } else {
      toggleTheme(theme)
    }
  };

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

export default AppearanceScreen;

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