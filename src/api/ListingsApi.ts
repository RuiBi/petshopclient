import {Listing} from "../models/Listing";
import {get, post, put, remove} from "./ApiUtils";

export const getPetListing = (id: string): Promise<Listing> => {
    return get(`listings/${id}`);
}
export const getPetListings = (): Promise<Listing[]> => {
    return get('listings');
}

export const createPetListing = (data: any) => {
    return put('listings', { listing: data });
}

export const updateListing = (id: string, data: any) => {
    return post('listings', id, { listing: data });
}

export const removePetListing = (id: string) => {
    return remove('listings', id);
}