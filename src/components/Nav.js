import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import { UserContext } from '../contexts/UserContext'

const MenuBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const MenuLeft = styled.div`
  display: flex;  
`
const MenuRight = styled.div`
  display: flex;
`
const MenuItem = styled.div`
  margin: 0 20px;
  font-size: 24px;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      color : purple;
    }
  }
  button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
  }
`

const Nav = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  const handleLogoutClick = () => {
    fetch('http://localhost:5000/auth/logout', {
      method: 'delete',
      credentials: 'include'
    })
      .then(response => {
        setUser("")
        navigate('/')
      })
  }

  return (
      <MenuBackground>
        <Menu>
            <MenuLeft>
              <MenuItem>
                <Link to="/">
                  Accueil
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">
                  Joueurs
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">
                  Equipes
                </Link>
              </MenuItem>
            </MenuLeft>
            <MenuRight>
              {user ? 
                <>
                  <MenuItem>
                    Bonjour, {user.username}.
                  </MenuItem>
                  <MenuItem>
                    <button 
                      type="button" 
                      className=""
                      onClick={handleLogoutClick}
                    >
                      Déconnexion
                    </button>
                  </MenuItem>
                </>
              :
                <>
                  <MenuItem>
                    <Link to="/login">
                      Connexion
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/signup">
                      Inscription
                    </Link>
                  </MenuItem>
                </>
              }
            </MenuRight>
        </Menu>
      </MenuBackground>
  )
}

export default Nav