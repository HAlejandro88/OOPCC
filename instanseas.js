function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return `${this.title} was writen by ${this.author} in ${this.year}`
}



// Magazine constructure
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

// Instancear Magazine Object
const mag1 =  Magazine('ooo', 'al', '2000', 'Jan');

// Use Magazine Constructure
Magazine.prototype.constructor = Magazine;

// Inherit Prototype
console.log(mag1);