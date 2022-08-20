import { createContext, ReactNode, useContext, useState } from 'react'

type navbarContextType = {
  active: string
  setActive: (newState: string) => void
  isOpen: boolean
  setIsOpen: (newState: boolean) => void
}

type navbarContextProps = {
  children: ReactNode
}

const initialValue = {
  active: 'home',
  setActive: () => {},
  isOpen: false,
  setIsOpen: () => {},
}

const NavbarContext = createContext<navbarContextType>(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({ children }: navbarContextProps) => {
  const [active, setActive] = useState(initialValue.active)

  const [isOpen, setIsOpen] = useState(initialValue.isOpen)

  return (
    <NavbarContext.Provider value={{ active, setActive, isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}
