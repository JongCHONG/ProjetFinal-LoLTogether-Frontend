import React, { useContext, useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component"

import styled from 'styled-components'

import { UsersContext } from '../contexts/UsersContext'

import { getFilteredUsers, getLanguages } from '../api/filter'
import { optionsDisponiblities, optionsRoles, optionsRegions } from '../api/filter'

const SelectStyled = styled.div`
  color: black;
`
const FilterContainer = styled.div`
  .filter {
      text-align: center;
  }
`

const UsersFilter = () => {
  const { setUsers } = useContext(UsersContext)
  // const [optionsRegion, setOptionsRegion] = useState([])
  const [selectedRegion, setSelectedRegion] = useState([])
  const [optionsLanguages, setOptionsLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedDisponiblities, setSelectedDisponiblities] = useState([])
  const [selectedRoles, setSelectedRoles] = useState([])
  
  useEffect(() => {
    const getinfos = async () => {
      // const dataRegion = await getRegion()
      // setOptionsRegion(dataRegion)
      const dataLanguages = await getLanguages()
      setOptionsLanguages(dataLanguages)
    }
    getinfos()
  },[])
  
  useEffect(() => {
    const getFiltered = async () => {
      const data = await getFilteredUsers(selectedRegion, selectedLanguages, selectedDisponiblities, selectedRoles)
      setUsers(data)
    }
    getFiltered()
  },[selectedRegion, selectedLanguages, selectedDisponiblities, selectedRoles, setUsers])

  // console.log(selectedDisponiblities)
  return (
    <FilterContainer className='container'>
      <div className='row'>
        <div className='col-3 my-2 filter'>
          <p>Région</p>
          <SelectStyled>
            <MultiSelect
              options={optionsRegions}
              value={selectedRegion}
              onChange={setSelectedRegion}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </SelectStyled>
        </div>
        <div className='col-3 my-2 filter'>
          <p>Langue(s)</p>
          <SelectStyled>
            <MultiSelect
              options={optionsLanguages}
              value={selectedLanguages}
              onChange={setSelectedLanguages}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </SelectStyled>
        </div>
        <div className='col-3 my-2 filter'>
          <p>Disponibilités</p>
          <SelectStyled>
            <MultiSelect
              options={optionsDisponiblities}
              value={selectedDisponiblities}
              onChange={setSelectedDisponiblities}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </SelectStyled>
        </div>
        <div className='col-3 my-2 filter'>
          <p>Rôles</p>
          <SelectStyled>
            <MultiSelect
              options={optionsRoles}
              value={selectedRoles}
              onChange={setSelectedRoles}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </SelectStyled>
        </div>
      </div>
    </FilterContainer>
  )
}

export default UsersFilter