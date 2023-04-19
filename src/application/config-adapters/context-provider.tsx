import React, { createContext, useContext, useState } from 'react';
import { Book } from '../../domain/models/book';

type AppContextValue = {
  user: string | null;
  book: Book | undefined;
  setUser: (user: string | null) => void;
  addBook: (book: Book) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const localeUser = localStorage.getItem('user') ?? null;
  const [user, setUser] = useState<string | null>(localeUser);
  const [book, setBook] = useState<Book | undefined>();

  const addBook = (book: Book) => {
    setBook(book);
  };

  const value: AppContextValue = {
    user,
    book,
    setUser,
    addBook,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
