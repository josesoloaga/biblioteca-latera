import { Book } from "src/domain/book"

export const createBookMock = (): Book => {
    return {
        title: "The Lord of the Rings",
        editorial: 'editorial 1',
        donateUser: 'usuario1'

    }
}

export const createBookListMock = (): Book[] => {
    return [
        {
            title: "The Lord of the Rings",
            editorial: 'editorial 1',
            donateUser: 'usuario1'
        },
        {
            title: "The Hobbit",
            editorial: 'editorial2',
            donateUser: 'usuario2'
        },
        {
            title: "The Silmarillion",
            editorial: 'editorial3',
            donateUser: 'usuario3'
        }
    ]
}