import React, { createContext, useContext, useState } from 'react'
import { Book } from '../domain/book';



type AppContextValue = {
  user: string | null;
  books: Book[];
  setUser: (user: string | null) => void;
  setBooks: (books: Book[]) => void;
  addBook: (book: Book) => void;
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider = ({ children }:{children: React.ReactNode}) => {
  const localeUser = localStorage.getItem('user') ?? null
  const [user, setUser] = useState<string | null>(localeUser)
  const [books, setBooks] = useState<Book[]>([])

  const addBook = (book: Book) => {
    setBooks([...books, book])
  }

  const value: AppContextValue = {
    user,
    books,
    setUser,
    setBooks,
    addBook
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
