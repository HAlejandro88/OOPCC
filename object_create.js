// Object odf Protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
/* const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author  = 'Alejandro Soto';
book1.year = '2000';
 */

 const book1 = Object.create(bookProtos,{
     title: { value: 'ppp' },
     author: { value: 'Alejnadro Soto' },
     year: { value: '1995' }
 })

console.log(book1x)