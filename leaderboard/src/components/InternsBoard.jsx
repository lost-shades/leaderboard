import React from 'react'
import { InternsDetails } from './InternsDetails'
import { InternsData } from './InternsData'

export const InternsBoard = () => {
    const handleclick = (e) => {
        console.log(e.target)
    }
  return (
    <div>
        <InternsDetails InternsData={InternsData}/>
    </div>
  )
}
