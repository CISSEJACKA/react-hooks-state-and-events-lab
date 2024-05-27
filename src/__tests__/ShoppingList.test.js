// src/__tests__/ShoppingList.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList';

const testData = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Carrot", category: "Vegetables" },
  { id: 4, name: "Milk", category: "Dairy" }
];

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={testData} />);
  expect(container.querySelector('.Items').children).toHaveLength(testData.length);
});

test("displays only items that match the selected category", () => {
  const { container } = render(<ShoppingList items={testData} />);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: "Fruits" }
  });

  expect(container.querySelector('.Items').children).toHaveLength(2);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: "Vegetables" }
  });

  expect(container.querySelector('.Items').children).toHaveLength(1);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: "Dairy" }
  });

  expect(container.querySelector('.Items').children).toHaveLength(1);
});
