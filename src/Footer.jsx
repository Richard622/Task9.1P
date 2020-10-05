import React from 'react';
import {Container, Button,Segment, Image ,Input , Menu} from "semantic-ui-react";
import '../node_modules/semantic-ui-css/semantic.min.css'


const Footer = () =>(
    <Segment inverted textAlign='center'>
    <Container>    
    <Menu secondary='true' inverted='true'>
      <Menu.Item>
        <h1>NEWSLETTER SIGN</h1>
      </Menu.Item>

      <Menu.Item>
      <Input placeholder='Enter your email' name='email' />
      </Menu.Item>      
            
      <Menu.Item>
      <Button>Subscribe</Button>
      </Menu.Item>
      
      <Menu.Item position='right'>
        <h1>CONNECT US :</h1>
        <Menu.Item><Image right src = {require('./images/Facebook.png')} width = "50px" height = "50px" /></Menu.Item>
        <Menu.Item><Image right src = {require('./images/1024px-Instagram_icon.png')} width = "50px" height = "50px" /></Menu.Item>
        <Menu.Item><Image right src = {require('./images/Logo-Twitter-icon-transparent-PNG.png')} width = "50px" height = "50px" /></Menu.Item>
      </Menu.Item>
    </Menu>
    </Container>
  
    </Segment>
      
  )

export default Footer;

