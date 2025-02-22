import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import { AnimatePresence } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'animate.css'

import ScrollToTop from './components/ScrollToTop'

import { UserContextProvider } from './contexts/UserContext'
import { UsersContextProvider } from "./contexts/UsersContext"
import { DeletedContextProvider } from "./contexts/DeletedContext"
import { ProfileContextProvider } from "./contexts/ProfileContent"
import { AnnouncementContextProvider } from "./contexts/AnnouncementContext"

import Home from './pages/Home'
import Login from './pages/Login'
import Announcements from "./pages/Announcements"
import Conversation from "./pages/Conversation"
import Signup from "./pages/Signup"
import UserProfile from "./pages/UserProfile"
import TeamProfile from "./pages/TeamProfile"
import Users from "./pages/Users"
import TeamCreation from "./pages/TeamCreation"
import Teams from "./pages/Teams"
import Policy from "./pages/Policy"
import NotFound from './pages/NotFound'

const App = () => {
  const location = useLocation()
  
  return (
    <ScrollToTop>
      <DeletedContextProvider>
        <AnnouncementContextProvider>
          <ProfileContextProvider>
            <UsersContextProvider>
                <UserContextProvider>
                  <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/user/:id" element={<UserProfile />} />
                      <Route path="/team/:id" element={<TeamProfile />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/announcements" element={<Announcements />} />
                      <Route path="/teams" element={<Teams />} />
                      <Route path="/conversation/:username/:id" element={<Conversation />} />
                      <Route path="/teamcreation" element={<TeamCreation />} />
                      <Route path="/policy" element={<Policy />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </AnimatePresence>
                </UserContextProvider>
            </UsersContextProvider>
          </ProfileContextProvider>
        </AnnouncementContextProvider>
      </DeletedContextProvider>
    </ScrollToTop>
  )
}

export default App
