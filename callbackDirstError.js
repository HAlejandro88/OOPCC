
const users = [
    {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        age: 21,
        gender: 'male',
    }, 
    {
        id: 2,
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        gender: 'Female',
    }
]


const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id)

    if(!user) return callback(`Not found ${id}`)

    return callback(null, user)
}


getUserById(1, (error, user) => {
    if(error) throw new Error(error)

    console.log(user)
})