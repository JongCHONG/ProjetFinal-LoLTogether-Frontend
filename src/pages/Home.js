import React from 'react'

import backgroundImage from '../images/home-background.png'
import homeWaveImage from '../images/home-wave.png'

import { RiUserLine, RiTeamLine } from 'react-icons/ri'

import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Header = styled.div`
  background-image: url(${backgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Separator = styled.div`
  background-image: url(${homeWaveImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  margin-top: 390px;
`
const SideDiv = styled.div`
  right: 10%;
  top: 10%;
  position: absolute;
  font-size: 36px;
  width: 300px;
  .p2 {
    font-size: 15px;
  }
`
const Middle = styled.div`
  background-color: #361F40;
  padding: 50px;
`
const HomeCard = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Description = styled.div`
  margin: 20px;
`
const Step = styled.div`
  border: 1px solid white;
  text-align: center;
`

const Home = () => {  
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <SideDiv>
            <motion.div
                style={{ x: -100 }} 
                animate={{ x: 0 }}          
              >
              <Logo />
              <p>Recrutes des joueurs pour ton équipe, ou fais-toi recruter.</p>
              <p className='p2'>Parce que jouer ensemble c'est aussi passer de bons moments.</p>
              <Title text='Découvrir' size='72' />
            </motion.div>
          </SideDiv>
          <Separator/>
        </Header>
        <Middle>
          <div className='container'>
          <motion.div
            style={{ x: -100 }} 
            animate={{ x: 0 }}          
          >
            <div className='row'>
              <div className='col-6'>
                <HomeCard>
                  <RiUserLine size='50%' />
                  <p>Vous cherchez un joueur?</p>
                </HomeCard>
                <Description>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
                <div className='row'>
                  <div className='col-4'>
                    <Step>
                      Etape 1
                    </Step>
                  </div>
                  <div className='col-4'>
                    <Step>
                      Etape 2
                    </Step>
                  </div>
                  <div className='col-4'>
                    <Step>
                        Etape 3
                    </Step>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <HomeCard>
                  <RiTeamLine size='50%' />
                  <p>Vous cherchez une équipe?</p>
                  </HomeCard>
                <Description>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
                <div className='row'>
                  <div className='col-4'>
                    <Step>
                      Etape 1
                    </Step>
                  </div>
                  <div className='col-4'>
                    <Step>
                      Etape 2
                    </Step>
                  </div>
                  <div className='col-4'>
                    <Step>
                      Etape 3
                    </Step>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </Middle>
        <Footer />
      </motion.div>
    </>
  )
}

export default Home