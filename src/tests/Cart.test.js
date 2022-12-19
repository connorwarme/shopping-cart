import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import Cart from "../components/Cart";
import content from "../components/Content";
import userEvent from "@testing-library/user-event";

const cartContent = content;
cartContent.forEach((item, index) => item.quantity = (index + 1));

afterAll(cleanup);

test("renders w/ title heading", () => {
    render(<Cart cart={cartContent}/>);
    expect(screen.getByRole('heading', {name: "Shopping Cart"}).textContent).toMatch('Shopping Cart');
})

test("renders cart items", () => {
    render(<Cart cart={cartContent} />);
    // renders 4 list items
    expect(screen.getAllByRole('listitem').length).toEqual(4);
    // each li has title heading
    expect(screen.getByRole('heading', {name: `${cartContent[0].title}`}).textContent).toMatch("4 Sessions");
    expect(screen.getByRole('heading', {name: `${cartContent[1].title}`}).textContent).toMatch("8 Sessions");
    expect(screen.getByRole('heading', {name: `${cartContent[2].title}`}).textContent).toMatch("12 Sessions");
    expect(screen.getByRole('heading', {name: `${cartContent[3].title}`}).textContent).toMatch("Single Session");
    // each li has about heading
    expect(screen.getByRole('heading', {name: `${cartContent[0].about}`}).textContent).toMatch(/details/i);
    expect(screen.getByRole('heading', {name: `${cartContent[1].about}`}).textContent).toMatch(/details/i);
    expect(screen.getByRole('heading', {name: `${cartContent[2].about}`}).textContent).toMatch(/details/i);
    expect(screen.getByRole('heading', {name: `${cartContent[3].about}`}).textContent).toMatch(/details/i);
    // each li has quantity paragraph
    expect(screen.getAllByText(/Quantity:/).length).toEqual(4);
    // each li has price paragraph
    expect(screen.getAllByText(/Price:/).length).toEqual(4);
    // each li has remove button
    expect(screen.getAllByRole('button', {name: 'Remove'}).length).toEqual(4);
    // each li has decrement button
    expect(screen.getAllByRole('button', {name: 'Decrement'}).length).toEqual(4);
    // each li has increment button
    expect(screen.getAllByRole('button', {name: 'Increment'}).length).toEqual(4);
})

test("remove button functions aka fires event w/ click", () => {
    const handleClick = jest.fn();
    render(<Cart cart={[cartContent[0]]} del={handleClick} />);
    userEvent.click(screen.getByRole('button', {name: 'Remove'}));
    expect(handleClick).toHaveBeenCalledTimes(1);
})
test("increment button functions aka fires event w/ click", () => {
    const handleClick = jest.fn();
    render(<Cart cart={[cartContent[0]]} inc={handleClick} />);
    userEvent.click(screen.getByRole('button', {name: 'Increment'}));
    expect(handleClick).toHaveBeenCalledTimes(1);
})
test("decrement button functions aka fires event w/ click", () => {
    const handleClick = jest.fn();
    render(<Cart cart={[cartContent[0]]} dec={handleClick} />);
    userEvent.click(screen.getByRole('button', {name: 'Decrement'}));
    expect(handleClick).toHaveBeenCalledTimes(1);
})