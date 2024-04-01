import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

function addTodo(getByLabelText, getByText ) {
  const todoInput = getByLabelText('Task');
  const btn = getByText('Add');
  
  fireEvent.change(todoInput, { target: { value: 'clean kitchen' } });
  fireEvent.click(btn);
}

it('renders without crashing', function () {
    render(<TodoList />);
});

it('matches snapshot', function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add new todo', function () {
    const { getByLabelText, queryByText, getByText } = render(<TodoList />);
    // make sure there are no todos yet
    expect(queryByText('X')).not.toBeInTheDocument();
    addTodo(getByLabelText, getByText);
    // expect to see the button contained in the new box
    expect(getByText('X'));
    expect(getByText('clean kitchen'));
  });

  it('should remove a todo', function () {
    const { getByLabelText, queryByText, getByText } = render(<TodoList />);
    addTodo(getByLabelText, getByText);
  
    const removeBtn = getByText('X');
  
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
  })
