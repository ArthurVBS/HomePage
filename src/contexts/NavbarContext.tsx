import { createContext, ReactNode, useContext } from 'react'
import usePersistedState from '../utils/usePersistedState'

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
  const [active, setActive] = usePersistedState('active', initialValue.active)

  return (
    <NavbarContext.Provider value={{ active, setActive }}>
      {children}
    </NavbarContext.Provider>
  )
}
