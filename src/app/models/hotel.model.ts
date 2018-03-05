export interface HotelModel {
    name: string;
    image: string;
    price: number;
    stars: Stars;
    amenities: string[];
}

export type Stars = 1 | 2 | 3 | 4 | 5;
