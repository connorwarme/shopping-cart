import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ProdCard from "../components/ProdCard";
import content from "../components/Content";
import userEvent from "@testing-library/user-event";

const prodContent = content;
prodContent.forEach((item, index) => item.quantity = (index + 1));

afterAll(cleanup);

test("Renders w/ title heading", () => {
    render(<ProdCard data={prodContent[0]}/>, {wrapper: MemoryRouter});
    expect(screen.getByRole('heading', {name: "4 Sessions"})).toBeInTheDocument();
})
test("Renders w/ details, view product btn, add to cart btn", () => {
    render(<ProdCard data={prodContent[0]}/>, {wrapper: MemoryRouter});
    expect(screen.getByText(/details/i)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "View Product"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Add to Cart"})).toBeInTheDocument();
})
test("View product btn fires function on click", () => {
    const handleClick = jest.fn();
    render(<ProdCard data={prodContent[0]} view={handleClick}/>, {wrapper: MemoryRouter});
    userEvent.click(screen.getByRole("button", {name: "View Product"}));
    expect(handleClick).toHaveBeenCalledTimes(1);
})
test("Add to cart btn fires function on click", () => {
    const handleClick = jest.fn();
    render(<ProdCard data={prodContent[0]} add={handleClick}/>, {wrapper: MemoryRouter});
    userEvent.click(screen.getByRole("button", {name: "Add to Cart"}));
    userEvent.click(screen.getByRole("button", {name: "Add to Cart"}));
    expect(handleClick).toHaveBeenCalledTimes(2);
})