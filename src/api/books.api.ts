import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
    category_id?: number;
    news?: boolean;
    currentPage?: number;
    limit: number;
}

interface FetchBooksResponse {
    books: Book[];
    pagination: Pagination;
}

export const fetchBooks = async(params: FetchBooksParams) => {
    try {
        const response = await httpClient.get<FetchBooksResponse>('/books', {
            params: params,
        });

        return response.data;
    } catch(error) {
        return {
            books: [],
            pagination: {
                totalCount: 0,
                currentPage: 1,
            }
        }
    }
};

// string으로 받아야 코드 수가 줄고 편해서
export const fetchBook = async(bookId: string) => {
    const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
    return response.data;
};

// 화면에서 직접 bookId를 요청하기 때문에 number
export const likeBook = async(bookId: number) => {
    const response = await httpClient.post(`/likes/${bookId}`);
    return response;
};

export const unLikeBook = async(bookId: number) => {
    const response = await httpClient.delete(`/likes/${bookId}`);
    return response;
};