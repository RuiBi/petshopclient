export type ListingType = 'Dog' | 'Cat' | 'Rabbit' | 'Bird' | 'Hamster';


export interface Listing {
    id: string;
    title: string;
    type: ListingType;
    imageUrl: string;
    description: string;
}