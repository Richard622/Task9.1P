import React from 'react'
import Images from './Images.jsx'  //不能加空格，很严格
import Header from './Header'
import Footer from './Footer'
import CardList from "./CardList"
import CardList2 from "./CardList copy"
function App(){
    return(<div>
  <Header />
  <Images />    
  <CardList />
  <CardList2 />
  <Footer /> 
  </div>);
}

export default App