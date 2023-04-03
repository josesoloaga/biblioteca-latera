import React from "react";
import ListBook from "../ui/features/list-book/list-book-component";
import { useAppContext } from "../config-adapters/context-provider";

const HomePage = ()=>  {
  const {user} = useAppContext()


  return (
    <div className="Home">
      <h1>Home {user}</h1>
      <ListBook />
    </div>
  );
}

export default HomePage;
