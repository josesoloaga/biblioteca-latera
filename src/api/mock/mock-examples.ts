import { Book } from '../../domain/book';

export const createBookMock = (): Book => {
  return {
    title: 'The Lord of the Rings',
    editorial: 'editorial 1',
    donateUser: 'usuario1',
    category: 'INFANTIL',
  };
};

export const createBookListMock = (): Book[] => {
  return [
    {
      title: 'The Lord of the Rings',
      editorial: 'editorial 1',
      donateUser: 'usuario1',
      category: 'INFANTIL',
    },
    {
      title: 'The Hobbit',
      editorial: 'editorial2',
      donateUser: 'usuario2',
      category: 'CUENTOS',
    },
    {
      title: 'The Silmarillion',
      editorial: 'editorial3',
      donateUser: 'usuario3',
      category: 'CUENTOS',
    },
    {
      title: 'The Children of Hurin',
      editorial: 'editorial4',
      donateUser: 'usuario4',
      category: 'INFANTIL',
    },
    {
      title: 'The Fall of Gondolin',
      editorial: 'editorial5',
      donateUser: 'usuario5',
      category: 'MAYORES',
    },
    {
      title: 'The History of Middle-earth',
      editorial: 'editorial6',
      donateUser: 'usuario6',
      category: 'MAYORES',
    },
  ];
};
