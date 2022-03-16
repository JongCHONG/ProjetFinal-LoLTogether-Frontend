import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../UserProfile.css'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { MdOutlineAnnouncement } from 'react-icons/md'

import { getAnnouncements } from '../api/announcement'

import moment from "moment"
import 'moment/locale/fr'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import backgroundImage from '../images/announcements-background.jpg'

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
  font-size: 20px;
  width: 31%;
  .p2 {
    font-size: 15px;
  }
`
const Middle = styled.div`
  background-color: black;
  padding: 0 20%;
`
const AnnouncementsDiv = styled.div`
  margin : 5% 0;
`
const AnnouncementText = styled.div`
  overflow-wrap: break-word;
`
const UserInfosSeparator = styled.div`
  border-top : 1px solid rgba(255, 229, 147, 0.253);
`
const DateTime = styled.div`
  font-size: 13px;
  color: gray;
`
const SummonerName = styled.div`
  font-family: GrechenFuemen;
  font-size: 25px;
  a {
    text-decoration: none;
  }
`

const Announcements = () => {
  const [announcements, setAnnouncements] = useState(null)

  useEffect(() => {
    fetchAnnouncements()
  },[])

  const fetchAnnouncements = async () => {
    const response = await getAnnouncements()
    
    setAnnouncements (response)
  }

  if(!announcements ) {
    return <h1>Chargement...</h1>
  }
  
  console.log(announcements)
  // console.log(lolProfile)
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <LogoTitle>
              <motion.div
                style={{ x: 100 }} 
                animate={{ x: 0 }}          
              >
                <Logo />
                <Title text="Annonces" size='64'/>
              </motion.div>
            </LogoTitle>
        </Header>
        <Middle>
          <div className='container' >
            <AnnouncementsDiv>
              {announcements.map((element, index, {length}) => (  
                length - 1 !== index ? (
                  <div key={index} >
                    <div className='row d-flex align-items-center userinfos'>
                      <div className='col-1'>
                        <MdOutlineAnnouncement/> 
                      </div>
                      <div className='col-2'>
                        Annonces
                      </div>
                      <div className='col-8'>
                        <UserInfosSeparator/>
                      </div>
                    </div>
                    <div className='row'> 
                      <div className="col-2 my-1 py-2 ">
                        {element.user && 
                         <Link to={`/user/${element.user._id}`} className='my-1 underline'>
                           <img 
                             src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${element.user.summoner_infos.profileIconId}.png`} 
                             alt="Person" 
                             className="img-fluid rounded-circle animate__animated animate__bounce" 
                           />
                         </Link>
                        }
                        {element.user && 
                          <div className='text-center'>
                            <SummonerName>
                              <Link to={`/user/${element.user._id}`} className='my-1 underline'>{element.user.summoner_name}</Link>
                            </SummonerName>
                          </div>
                        }
                        {element.team && 
                          <Link to={`/team/${element.team._id}`} className='my-1'>
                            <img 
                              src={element.team.logo} 
                              alt="teamLogo" 
                              className="img-fluid rounded-circle animate__animated animate__bounce" 
                            />
                          </Link>
                        }
                        {element.team && 
                          <div className='text-center'>
                            <SummonerName>
                              <Link to={`/team/${element.team._id}`} className='my-1 underline'>{element.team.name}</Link>
                            </SummonerName>
                          </div>
                        }
                      </div>
                      <div
                        key={element._id} 
                        className='col-10 my-1 py-2 announcement-text'
                      >
                        <DateTime>Postée le {moment(element.createdAt).format('lll')}</DateTime>
                        <AnnouncementText>
                          {element.text}
                        </AnnouncementText>
                      </div>
                    </div>
                  </div> 
              ) : (
                <div key={index}>
                  <div className='row d-flex align-items-center userinfos'>
                    <div className='col-1'>
                      <MdOutlineAnnouncement/> 
                    </div>
                    <div className='col-2'>
                      Annonces
                    </div>
                    <div className='col-8'>
                      <UserInfosSeparator/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col-2 my-1 py-2 ">
                      {element.user && 
                        <Link to={`/user/${element.user._id}`} className='my-1 underline'>
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${element.user.summoner_infos.profileIconId}.png`} 
                            alt="Person" 
                            className="img-fluid rounded-circle animate__animated animate__bounce" 
                          />
                        </Link>
                      }
                      {element.user && 
                        <div className='text-center'>
                          <SummonerName>
                            <Link to={`/user/${element.user._id}`} className='my-1 underline'>{element.user.summoner_name}</Link>
                          </SummonerName>
                        </div>
                      }
                      {element.team && 
                        <Link to={`/team/${element.team._id}`} className='my-1'>
                          <img 
                            src={element.team.logo} 
                            alt="teamLogo" 
                            className="img-fluid rounded-circle animate__animated animate__bounce" 
                          />
                        </Link>
                      }
                      {element.team && 
                        <div className='text-center'>
                          <SummonerName>
                            <Link to={`/team/${element.team._id}`} className='my-1 underline'>{element.team.name}</Link>
                          </SummonerName>
                        </div>
                      }
                    </div>
                    <div
                      key={element._id} 
                      className='col-10 my-1 py-1 '
                    >
                      <DateTime>Posté le {moment(element.createdAt).format('lll')}</DateTime>
                      <AnnouncementText>
                        {element.text}
                      </AnnouncementText>
                    </div>
                  </div>
                </div>
              )))}
            </AnnouncementsDiv>
          </div>
        </Middle>
        <Footer />
      </motion.div>
    </>
  )
}

export default Announcements