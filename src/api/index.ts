import axios, { AxiosResponse } from "axios";
import { NewsItem } from "../types";

const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "024a62a3eb3d4e7ea73167ebe07d4fa9";


export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsItem[];
}

export const getAllNews = async (searcKeyword: string | undefined = 'apple', language: string = 'en'): Promise<NewsItem[]> => {
    const response: AxiosResponse<NewsApiResponse> = await axios.get(
      `${BASE_URL}?apiKey=${API_KEY}&language=${language}&sortBy=publishedAt&q=${searcKeyword}&searchIn=title`  
    //`${BASE_URL}?q=${searcKeyword}&sortBy=popularity&language=${language}&apiKey=${API_KEY}`
    );
    console.log("res", response.data.articles, language)
    return response.data.articles;
};

