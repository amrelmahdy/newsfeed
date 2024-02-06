import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

interface SearchInputProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: () => void;
    placeholder: string;
}

const SearchInput = ({ searchQuery, setSearchQuery, handleSearch, placeholder }: SearchInputProps) => {
    const { t } = useTranslation();
    const colors = useTheme().colors;
    const styles = styling(colors)

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder={t(placeholder)}
                // placeholderTextColor={colors.lightTextColor}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
            />
        </View>
    );
};


export default SearchInput;

const styling = (colors) => StyleSheet.create({
    searchContainer: {
        padding: 10,
        backgroundColor: colors.card,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    searchInput: {
        height: 40,
        color: colors.textColor,
        borderWidth: 1,
        backgroundColor: colors.inputBackgroundColor,
        borderColor: colors.border,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});