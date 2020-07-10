
// Object literal
const book = {
    title: 'Book One',
    author: 'John Doe',
    year: '2019',
    getSummary: function() {
        return `${this.title} was writen by ${this.author} in ${this.year}`
    }
}

/* console.log(book.getSummary())
 */
const book2 = {
    title: 'Book Two',
    author: 'Alejandro Soto',
    year: '2019',
    getSummary: function() {
        return `${this.title} was writen by ${this.author} in ${this.year}`
    }
}

/* console.log(Object.values(book)); */ // Trae los valores del objeto
/* console.log(Object.keys(book2)); */ // trae las propiedades del objeto