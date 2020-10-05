import React from 'react';
import {Container, Button,Segment,Menu } from "semantic-ui-react";
import '../node_modules/semantic-ui-css/semantic.min.css'

const Header = () =>(
  <Segment inverted textAlign='center'>
  <Container>    
  <Menu secondary='true' inverted='true'>
    <Menu.Item>
      <h1>iCrowdTask</h1>
    </Menu.Item>
            <Menu.Item as='a'><h3>How it works</h3></Menu.Item>
            <Menu.Item as='a'><h3>Requesters</h3></Menu.Item>
            <Menu.Item as='a'><h3>Workers</h3></Menu.Item>
            <Menu.Item as='a'><h3>Pricing</h3></Menu.Item>
            <Menu.Item as='a'><h3>About</h3></Menu.Item>
    <Menu.Item position='right'>
      <Button><h3>Sign in</h3></Button>
    </Menu.Item>
  </Menu>
  </Container>

  </Segment>
    
)

export default Header;










// import './PageHeader.css'
// import 'semantic-ui-css/semantic.min.css'

// let  headerpart1 = "headerpart1"
// let navli = "navli"
// let header = "header"
// let ul = "ul"
// let a = "a"
// let headerpart2 = "headerpart2"
// let headerpart3 = "headerpart3"
// function PageHeader() {
//   return (
//     <div className = {header}>
//       <div className = {headerpart1}>I Crowd Task</div>
//       <div className = {headerpart2}>
//         <ul className = {ul}>
//           <li className = {navli}><a>How it works</a></li>
//           <li className = {navli}>Requesters</li>
//           <li className = {navli}>Workers</li>
//           <li className = {navli}>Pricing</li>
//           <li className = {navli}>About</li>
//         </ul>
//       </div>
//       <div className = {headerpart3}>Sign in</div>
//     </div>
//   );
// }

// export default PageHeader;
