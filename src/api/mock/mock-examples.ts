import { Book } from '../../domain/book';
import { colorRGB } from '../../domain/utils';

export const createBookMock = (): Book => {
  return {
    title: 'The Lord of the Rings',
    autor: 'autor 1',
    category: 'INFANTIL',
  };
};

export const createBookListMock = (): Book[] => {
  return [
    {
      title: 'The Lord of the Rings',
      autor: 'autor 1',
      category: 'INFANTIL',
    },
    {
      title: 'The Hobbit',
      autor: 'editorial2',
      category: 'CUENTOS',
    },
    {
      title: 'The Silmarillion',
      autor: 'editorial3',
      category: 'CUENTOS',
    },
    {
      title: 'The Children of Hurin',
      autor: 'editorial4',
      category: 'INFANTIL',
    },
    {
      title: 'The Fall of Gondolin',
      autor: 'editorial5',
      category: 'MAYORES',
    },
    {
      title: 'The History of Middle-earth',
      autor: 'editorial6',
      category: 'MAYORES',
    },
    {
      title: 'The History ',
      autor: 'editorial6',
      category: 'MAYORES',
    },
    {
      title: ' Middle-earth',
      autor: 'editorial6',
      category: 'MAYORES',
    },
  ];
};
