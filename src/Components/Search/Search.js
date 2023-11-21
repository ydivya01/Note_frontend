import React from 'react'
import { useState } from 'react'
import { Label, FormFeedback,FormGroup,Input,FormText} from 'reactstrap'

export default function Search() {
    const [query, setQuery]= useState('')
    console.log(query)
  return (
    <>
   <input type='text' placeholder='search...' className='search' onChange={e=>setQuery(e.target.value)}></input>
  
 </>
  )
}
