import React from 'react'
import { useNavbar } from '../../contexts/NavbarContext'
import { ArrowIcon, Container, Item, ItemIcon } from './styles'

type Props = {
  title: string
  icon: string
  item: string
}

const NavItem: React.FC<Props> = ({ title, icon, item }) => {
  const { active, setActive } = useNavbar()

  const handleClick = (newState: string) => {
    setActive(newState)
  }

  return (
    <Container active={active == item} onClick={() => handleClick(item)}>
      <Item>
        <ItemIcon className={icon}></ItemIcon>
        {title}
      </Item>
      <ArrowIcon className="fas fa-arrow-right"></ArrowIcon>
    </Container>
  )
}

export default NavItem
