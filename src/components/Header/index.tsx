import { HeaderContainer, ContainerImage } from '../styles'
import Logo from '../../assets/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <ContainerImage>
        <img src={Logo} alt="" />
        <p>Ignite timer</p>
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
