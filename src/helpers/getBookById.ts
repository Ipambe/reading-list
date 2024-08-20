import { library } from "../data/books.json";

export const getBookById = (id: string) => {
  return library.find(({book}) => book.ISBN === id)
}