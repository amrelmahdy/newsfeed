import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({ data, defaultValue, onSelectButton }) => {
	const colors = useTheme().colors;
	const [value, setValue] = useState(defaultValue || null);
	const styles = styling(colors)

	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	return (
		<View>
			{data.map(res => {
				// console.log(value , res.key, defaultValue)
				return (
					<View key={res.key} style={styles.container}>
						<Text style={styles.radioText}>{res.text}</Text>
						<TouchableOpacity
							style={styles.radioCircle}
							onPress={() => {
								onSelectButton?.(res.key)
								setValue(res.key);
							}}>
                            {value === res.key && <View style={styles.selectedRb} />}
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};


export default RadioButton;


const styling = colors => StyleSheet.create({
	container: {
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 15,
        color: colors.textColor,
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: colors.primary,
    },

});