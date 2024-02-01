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

export const getAllNews = async (language: string = 'en'): Promise<NewsItem[]> => {
    try {
        const response: AxiosResponse<NewsApiResponse> = await axios.get(
            `${BASE_URL}?category=business&q=&from=2023-12-31&sortBy=publishedAt&language=${language}&apiKey=${API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};

