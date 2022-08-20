import { createContext, ReactNode, useContext, useState } from 'react'

type navbarContextType = {
  active: string
  setActive: (newState: string) => void
}

type navbarContextProps = {
  children: ReactNode
}

const initialValue = {
  active: 'home',
  setActive: () => {},
}

const NavbarContext = createContext<navbarContextType>(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({ children }: navbarContextProps) => {
  const [active, setActive] = useState(initialValue.active)

  return (
    <NavbarContext.Provider value={{ active, setActive }}>
      {children}
    </NavbarContext.Provider>
  )
}
