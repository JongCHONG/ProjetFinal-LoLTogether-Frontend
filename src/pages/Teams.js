import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'
import TeamCard from '../components/TeamCard'

import backgroundImage from '../images/policy-background.png'

const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LogoTitle = styled.div`
  width: 45%;
  font-size: 20px;
`
const Middle = styled.div`
  background-color: black;
  padding: 5%;
`

const Teams = () => {
  // const navigate = useNavigate()
  const [teams, setTeams] = useState(null)

  useEffect(() => {
    const getTeams = async () =>{
      
      const response = await fetch(`http://localhost:5000/teams/`, {
        credentials: "include"
      })
      const data = await response.json()
      if (data.error) {
          // navigate('/login')
        } else {
          setTeams(data)
      }
    }
    getTeams()
  },[])

  
  console.log("teams", teams)
  return (
    <>
      <Nav />
      <Header>
        <LogoTitle>
          <motion.div
            style={{ x: 100 }} 
            animate={{ x: 0 }}          
          >
            <Logo />
            <Title text="Liste des joueurs" size='64'/>
          </motion.div>
        </LogoTitle>
      </Header>
      <Middle>
        <div className='container'>
          <motion.div
            style={{ x: -100 }} 
            animate={{ x: 0 }}          
          >
            <div className='row d-flex justify-content-around'>
              {teams.map(element => (
                <TeamCard
                  key={element._id}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Middle>
      <Footer />
    </>
  )
}

export default Teams