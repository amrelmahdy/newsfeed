import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../theme/colors';


export type RadioButtonItem = {
	key: string;
	text: string;
}

interface RadioButtonProps {
	data: RadioButtonItem[];
	defaultValue?: string;
	onSelectButton?: (selected: string) => void;
}

const RadioButton = ({ data, defaultValue, onSelectButton = () => { } }: RadioButtonProps) => {
	const colors: AppColors = useTheme().colors as AppColors;
	const [value, setValue] = useState(defaultValue || null);
	const styles = styling(colors)

	useEffect(() => {
		defaultValue && setValue(defaultValue)
	}, [defaultValue])

	return (
		<View>
			{data.map((res: RadioButtonItem) => {
				return (
					<View key={res.key} style={styles.container}>
						<Text style={styles.radioText} testID={`radio-text-${res.key}`}>{res.text}</Text>
						<TouchableOpacity
							style={styles.radioCircle}
							onPress={() => {
								onSelectButton(res.key)
								setValue(res.key);
								console.log("onSelectButton", res.key)
							}}
							testID={`radio-button-${res.key}`}>
							{value === res.key && <View style={styles.selectedRb} testID={`selected-radio-${res.key}`}
							/>}
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};


export default RadioButton;


const styling = (colors: AppColors) => StyleSheet.create({
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