import { createContext, ReactNode, useContext, useState } from 'react'

type navbarContextType = {
  isOpen: boolean
  setIsOpen: (newState: boolean) => void
}

type navbarContextProps = {
  children: ReactNode
}

const initialValue = {
  isOpen: false,
  setIsOpen: () => {},
}

const NavbarContext = createContext<navbarContextType>(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({ children }: navbarContextProps) => {
  const [isOpen, setIsOpen] = useState(initialValue.isOpen)

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}
