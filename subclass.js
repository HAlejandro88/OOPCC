class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }
}


// Magazine subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author. year);
        this.month = month;
    }
}