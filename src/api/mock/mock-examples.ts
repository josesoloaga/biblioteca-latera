import { Book } from '../../domain/book';

export const createBookMock = (): Book => {
  return {
    title: 'The Lord of the Rings',
    editorial: 'editorial 1',

    category: 'INFANTIL',
  };
};

export const createBookListMock = (): Book[] => {
  return [
    {
      title: 'The Lord of the Rings',
      editorial: 'editorial 1',
<<<<<<< HEAD
=======
      donateUser: 'usuario1',
>>>>>>> 681c7be2 (feat: route donateform navigate/donate seteo book checked)
      category: 'INFANTIL',
    },
    {
      title: 'The Hobbit',
      editorial: 'editorial2',
      category: 'CUENTOS',
    },
    {
      title: 'The Silmarillion',
      editorial: 'editorial3',
      category: 'CUENTOS',
    },
    {
      title: 'The Children of Hurin',
      editorial: 'editorial4',
      category: 'INFANTIL',
    },
    {
      title: 'The Fall of Gondolin',
      editorial: 'editorial5',
      category: 'MAYORES',
    },
    {
      title: 'The History of Middle-earth',
      editorial: 'editorial6',
      donateUser: 'usuario6',
      category: 'MAYORES',
    },
    {
      title: 'The History ',
      editorial: 'editorial6',
      category: 'MAYORES',
    },
    {
      title: ' Middle-earth',
      editorial: 'editorial6',
      category: 'MAYORES',
    },
  ];
};
