import react from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App unit tests', () => {
  it('Should add new task when form has been submitted', () => {
    const { container, getByTestId, getByText } = render(<App />)
    expect(container).toBeTruthy();
  
    const inputFieldTask = getByTestId('task-field');
    fireEvent.change(inputFieldTask, { target: { value: 'new testing' }});
    expect(inputFieldTask.value).toEqual('new testing');

    const btnSubmitForm = getByTestId('btn-submit');
    fireEvent.click(btnSubmitForm);

    const table = getByTestId('table');
    // console.log(table.innerHTML)
    const tdTask = getByText('new testing');
    expect(tdTask).toBeDefined();
  });
});

// Renderizar o componente
// buscar o input
// digitar no input
// buscar o botao de submit
// clicar no botao
// buscar a tabela
// verificar se a tarefa foi adicionada na tabela