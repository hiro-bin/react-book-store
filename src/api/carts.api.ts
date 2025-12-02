import { Cart } from "../models/cart.model";
import { httpClient } from "./http";

interface AddCartParams {
    book_id: number;
    quantity: number;
}

export const addCart = async(params: AddCartParams) => {
    const response = await httpClient.post('/carts', params);
    return response.data;
};

export const fetchCart = async () => {
    try {
        const response = await httpClient.get<Cart[]>("/carts");
        return response.data;
    } catch (error) {
        console.error("Error in fetchCart:", error);
        throw error;
    }
};

export const deleteCart = async(cartId: number) => {
    const response = await httpClient.delete(`/carts/${cartId}`);
    return response.data;
}