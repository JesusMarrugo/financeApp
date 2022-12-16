import React from 'react';
import '@testing-library/jest-dom'
import 'jest'
import { render, screen } from '@testing-library/react';
import Reports from './Reports';

test('renders the reports main section', () => {
  render(<Reports />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});

test('renders the reports table section', () => {
  render(<Reports />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});

test('renders the total sells component', () => {
  render(<Reports />);
  const totalSellsElement = screen.getByText(/Total de ventas/i);
  expect(totalSellsElement).toBeInTheDocument();
});

test('renders the filters component', () => {
  render(<Reports />);
  const filtersElement = screen.getByText(/filtrar/i);
  expect(filtersElement).toBeInTheDocument();
});

test('renders the table component', () => {
  render(<Reports />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});