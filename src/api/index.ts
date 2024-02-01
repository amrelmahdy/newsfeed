import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "108ccbfd666941f280c38c9bb316589f";

interface NewsItem {
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
    content: string;
}

interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsItem[];
}

export const getAllNews = async (searcKeyword: string | undefined = '', language: string = 'en'): Promise<NewsItem[]> => {
    const response: AxiosResponse<NewsApiResponse> = await axios.get(
        `${BASE_URL}?category=sport&q=${searcKeyword}&sortBy=publishedAt&language=${language}&apiKey=${API_KEY}`
    );
    return response.data.articles;
};

