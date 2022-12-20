import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Product from "../components/Product";
import userEvent from "@testing-library/user-event";

const content = {
    id: 12345678,
    title: "4 Sessions",
    about: "details about the 4 week counseling program",
    quantity: 0,
    price: "$400",
    url: '4-sessions',
}

afterAll(cleanup);

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/products/4-sessions",
      state: content,
    })
  }));

test("Renders w/ title heading and details section", () => {
    render(<Product />, {wrapper: MemoryRouter});
    expect(screen.getByRole("heading", {name: /4 Sessions/i})).toBeInTheDocument();
    expect(screen.getByText(/details/i)).toBeInTheDocument();
})
test("Renders add to cart, decrement, and increment btns, number input", () => {
    render(<Product />, {wrapper: MemoryRouter});
    expect(screen.getByRole("button", {name: "Add to Cart"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "-"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "+"})).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", {type: "number"})).toBeInTheDocument();
})
test("Add to Cart fn fires on click", () => {
    const handleClick = jest.fn();
    render(<Product add={handleClick} />);
    userEvent.click(screen.getByRole('button', {name: 'Add to Cart'}));
    expect(handleClick).toHaveBeenCalledTimes(1);
})
test("Decrement and increment btn fn fire on click", () => {
    render(<Product />);
    userEvent.click(screen.getByRole('button', {name: '+'}));
    userEvent.click(screen.getByRole('button', {name: '+'}));
    userEvent.click(screen.getByRole('button', {name: '+'}));
    userEvent.click(screen.getByRole('button', {name: '-'}));
    expect(Number(screen.getByRole("spinbutton").value)).toEqual(3);
})
test("Input[type:'number'] registers input, adjusts value, shows error", () => {
    render(<Product />);
    userEvent.click(screen.getByRole("spinbutton"));
    userEvent.keyboard("4");
    expect(screen.getByRole("spinbutton").value).toEqual("14");
    expect(screen.getByText(/quantity maximum/i)).toBeInTheDocument();
})