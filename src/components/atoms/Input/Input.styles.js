import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  input {
    border: 1px solid #0005;
    border-color: ${({ isError }) => (isError ? 'red' : '#0005')};
    height: 35px;
    border-radius: 4px;
    font-size: 14px;
    width: 70%;
  }
`
