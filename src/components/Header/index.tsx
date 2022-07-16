import { HeaderContainer, ContainerImage } from '../styles'
import Logo from '../../assets/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <ContainerImage>
        <a href="https://github.com/thayronFeitosa/Ignite-timer">
          <img src={Logo} alt="Ignite-timer" />
          <p>Ignite timer</p>
        </a>
      </ContainerImage>
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
