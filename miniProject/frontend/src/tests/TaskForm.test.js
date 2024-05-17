import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('renders TaskForm component', () => {
  const { getByPlaceholderText, getByText } = render(<TaskForm />);
  const titleInput = getByPlaceholderText('Title');
  const descriptionInput = getByPlaceholderText('Description');
  const addButton = getByText('Add Task');

  fireEvent.change(titleInput, { target: { value: '' } });
  fireEvent.change(descriptionInput, { target: { value: '' } });
  fireEvent.click(addButton);



  

  expect(titleInput.value).toBe('');
  expect(descriptionInput.value).toBe('');
});
