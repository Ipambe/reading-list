import { library as a } from "./books.json";
export const library =  a.map((e) => ({ ...e.book, lecture: false }));