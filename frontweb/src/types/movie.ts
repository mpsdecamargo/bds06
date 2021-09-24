import { Genre } from "./genre"

export type Movie = {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    synopsis: string,
    imgUrl: string,
    genre: Genre[];
}