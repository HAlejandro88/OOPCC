// Constructor


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = () => {
        return `${this.title} was writen by ${this.author} in ${this.year}`
    }
}

// instanceo el objeto
const book = new Book('Booke ONe', 'Alejandro', '1995');

