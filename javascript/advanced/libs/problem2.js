// Adding books to the library
Library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
Library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
Library.addBook(new Book("1984", "George Orwell"));
Library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
Library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));


// Demonstrating functionality
document.write("<br/>Searching for the book with author 'Harper Lee':<br/>");
Library.searchBooks("Harper Lee");


document.write(
 "<br/>Searching for the book with title 'The Great Gastby':<br/>"
);
Library.searchBooks("The Great Gatsby");


document.write(
 "<br/>Searching for the book with title 'Design Thinking':<br/>"
);
Library.searchBooks("Design Thinking");


books = Library.books;
document.write("<br/>These are the books in the library:<br/>");
displayBooks();