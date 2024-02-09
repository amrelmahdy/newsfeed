import { Language, RadioButtonItem } from "./types";

export const LANGUAGES: Language[] = [
    {
        text: 'English',
        key: 'en',
    },
    {
        text: 'Italian',
        key: 'it',
    }
]


export const THEME_BUTTONS: RadioButtonItem[] = [
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