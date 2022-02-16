import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Title from './Title'

const Grid = styled.div`
  text-align: left;
  padding: 5px 0;
  a {
    text-decoration: none;
    color: #FFF;
  }
  a:hover {
    transition: all 0.5s ease-in-out;
    text-decoration: underline;
  }
  p {
    margin-top: 20px;
  }
`

const GridFooter = (props) => {
  const { title, text1, text2, link1, link2 } = props
  return (
    <Grid>
      <Title text={title} size='36'/>
        <Link to={link1}><p>{text1}</p></Link>
        <Link to={link2}><p>{text2}</p></Link>
    </Grid>
  )
}

export default GridFooter