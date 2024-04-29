// OBJECT CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `Title: ${this.title} by ${this.author}\nPages: ${this.pages}\nStatus: ${this.status}`;
    };
}

const book = new Book('The Hobbit', "J.R.R. Tolkien", 322, "read");
console.log(book.title);