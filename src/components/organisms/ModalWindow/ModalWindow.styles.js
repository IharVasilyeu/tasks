import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #0005;
  opacity: ${({ isOpen }) => isOpen ? '1': '0'};
  pointer-events: ${({ isOpen }) => isOpen ? 'all': 'none'};
  transition: All .3s;

  .modal {
    position: relative;
    padding: 15px;
    background: #fff;

    #closeModalBtn {
      position: absolute;
      right: 15px;
    }
  }
`
