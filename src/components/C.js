import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const C = () => {
  const value = useContext(AppContext)
  
  return (
    <div>
      <h3>C</h3>
      <p>{value}</p>
    </div>
  )
}

export default C