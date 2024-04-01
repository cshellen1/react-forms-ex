import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(getByLabelText, getByText ) {
  const colorInput = getByLabelText('Box Color');
  const widthInput = getByLabelText('Box Width');
  const heightInput = getByLabelText('Box Height');
  const btn = getByText('Add New Box');
  
  fireEvent.change(colorInput, { target: { value: 'purple' } });
  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.click(btn);
}

it('renders without crashing', function () {
    render(<BoxList />);
});

it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add new box', function () {
  const { getByLabelText, queryByText, getByText } = render(<BoxList />);
  // make sure no boxes yet
  expect(queryByText('X')).not.toBeInTheDocument();
  addBox(getByLabelText, getByText);
  // expect to see the button contained in the new box
  expect(getByText('X'));
  expect(getByText('Box'));
});

it('should remove a box', function () {
  const { getByLabelText, queryByText, getByText } = render(<BoxList />);
  addBox(getByLabelText, getByText);

  const removeBtn = getByText('X');

  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
})
