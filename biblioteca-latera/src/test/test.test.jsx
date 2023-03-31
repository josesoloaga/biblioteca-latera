
import { render, fireEvent, screen } from "@testing-library/react";
import { AddBook } from "../components/AddBook";


test("AddBook test para los inputs"; ()=>{
  render(<AddBook/>);
  const title = screen.getElementByLabel(/Titulo:/i);
  const editorial = screen.getElementByLabel(/Editorial:/i);

  expected(title, editorial).
})