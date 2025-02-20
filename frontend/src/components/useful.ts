export interface FILE {
    id: string;
    name: string;
    path: string
    size: number;
    type: string;
}

export interface DATA {
    img: number;
    vdo: number;
    count: number;
    data: any[];
}

export const API_URL = {
    DEV: "http://localhost:8080",
    PROB: "https://mkapi.mikenatcavon.com"
};

export const BASE_URL = {
    DEV: "http://localhost:3000",
    PROB: "https://mediakeep.mikenatcavon.com"
}