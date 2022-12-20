import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Products from "../components/Products";
import content from "../components/Content";

const prodContent = content;
prodContent.forEach((item, index) => item.quantity = (index + 1));

afterAll(cleanup);

test("Renders w/ title heading", () => {
    render(<Products prod={prodContent}/>, {wrapper: MemoryRouter});
    expect(screen.getByRole('heading', {name: "Products Page"})).toBeInTheDocument();
})
test("Displays product cards", () => {
    render(<Products prod={prodContent}/>, {wrapper: MemoryRouter});
    // product title
    expect(screen.getAllByRole("heading", {name: /session/i}).length).toEqual(4);
    // product details
    expect(screen.getAllByText(/details/i).length).toEqual(4);
    // buttons
    expect(screen.getAllByRole("button", {name: /View Product/i}).length).toEqual(4);
    expect(screen.getAllByRole("button", {name: /Add to Cart/i}).length).toEqual(4);
})