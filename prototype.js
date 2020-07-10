// Prototype


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return `${this.title} was writen by ${this.author} in ${this.year}`
}


// Get Age

Book.prototype.getAge = () => {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}


// revise / Change year
Book.prototype.revise = newYear => {
    this.year = newYear;
    this.revised = true;
}


// instanceo el objeto
const book = new Book('Booke ONe', 'Alejandro', '1995');
console.log(book)

