"use client";

import React, { useState, useEffect } from "react";
import Book, { BookI } from "@/components/Book";

const BookList = ({ books }: { books: BookI[] }) => {
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Fiction", value: "fiction" },
    { label: "Dystopian", value: "dystopian" },
    { label: "Romance", value: "romance" },
    { label: "Adventure", value: "adventure" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");

  const [filteredBooks, setFilteredBooks] = useState<BookI[]>(books);

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter(
          (book) => book.genreId.name.toLowerCase() === selectedFilter,
        ),
      );
    }
  }, [selectedFilter, books]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold">All Books</h1>

      <div className="mb-4">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={`px-4 py-2 m-1 ${
              selectedFilter === option.value
                ? "bg-zinc-900 text-white" // Selected state: Dark background with white text
                : "bg-zinc-200 text-black" // Default state: Light background with black text
            } transition duration-300 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-800`}
            onClick={() => setSelectedFilter(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {filteredBooks.map((b: BookI) => (
        <Book key={b._id} b={b} />
      ))}
    </div>
  );
};

export default BookList;
