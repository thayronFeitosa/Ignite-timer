import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['gray-100']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    width: 100%;
    height: 3rem;

    > p {
      font-family: 'Roboto';
      font-size: 30px;
      margin-left: 5px;
    }

    > img {
      width: 45px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['gray-100']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
