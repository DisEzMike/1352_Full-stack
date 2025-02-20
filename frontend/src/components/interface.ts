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