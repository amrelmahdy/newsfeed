import { Language, RadioButtonItem } from "./types";

export const LANGUAGES: Language[] = [
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