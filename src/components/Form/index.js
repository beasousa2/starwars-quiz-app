import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
  padding: 20px;
  margin-top: 5px;
  width: 100%;

  input, button {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  button:disabled {
    background-color: ${({ theme }) => theme.colors.disable };
    border: none;
  }
`;

Form.Input = styled.input`
  padding-left: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  margin-bottom: 30px;

`;

Form.Button = styled.button`
    background-color: ${({ theme }) => theme.colors.play };
    border: none;
`;

export default Form;


/*     <form onSubmit={function (infosDoEvento) {
                  infosDoEvento.preventDefault();
                  route.push(`/quiz?name=${name}`);
                  console.log("Fazendo uma submissão por meio do react");
              }}>
                <input
                    onChange={(infosDoEvento) => {
                        console.log(infosDoEvento.target.value);
                        //State
                        setName(infosDoEvento.target.value);
                    }}
                    placeholder="nome"/>
                <button type="submit" disabled={name.length === 0}>
                  Jogar {name}
                </button>
</form>
*/
