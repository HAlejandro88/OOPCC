class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }

    static topBook() {
        return 'holaaa';
    }
}


// Instantian Object
const book1 = new Book('Book One', 'Alejandro Soto','1995');
console.log(book1);


console.log(Book.topBook()); // en metodo esatico no lo puede llama con la instaca lo tines que llamar con la clae