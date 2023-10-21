

const obj ={
    name: 'John',
    birthdate: '1995-09-06'
}

const buildPerson = ({name, birthdate }) => {

    return {
        id : new Date().getTime(),
        name,
        birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getUTCFullYear()
    }

}


const john = buildPerson( obj )