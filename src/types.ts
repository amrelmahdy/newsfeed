export interface NewsItem {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}


export interface SettingsItem {
    name: string;
    icon: string;
    value: string;
    action: () => void;
}

export type Language = {
    key: string;
    text: string;
}

export type RadioButtonItem = {
    key: string;
    text: string;
}