import React from 'react'
import { Container,Image } from 'react-bootstrap'
import header from "./header.css";
import logo from "../../../src/assets/navi-bg.webp"


const Header = () => {
  return (

<Container className='foto-cont' >
<Image className='foto' src={logo}  width={"100%"}/> 
</Container>
  )
}

export default Header