import React from 'react'
import {Image} from 'semantic-ui-react'


function Images(){
  return(
  <div>
  <Image centered src = {require('./images/1.jpg')} width = "95%" height = "700" />
  </div>
  )
}
export default Images