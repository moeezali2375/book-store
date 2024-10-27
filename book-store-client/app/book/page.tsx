import { BookI } from "@/components/Book";
import BookList from "@/components/BookList";
import axios from "axios";

export const revalidate = 30;

const fetchBooks = async () => {
  const res = await axios.get("http://localhost:4000/book");
  return res.data.books;
};

const Page = async () => {
  const books: BookI[] = await fetchBooks();
  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default Page;
