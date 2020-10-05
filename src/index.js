import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import '../node_modules/semantic-ui-css/semantic.min.css'
// var d = new Date();//创建日期对象
// const year = d.getFullYear();//用对象调用接口
// const month = d.getMonth() + 1;
// const day = d.getUTCDate();

// if(month === 9 || month ===10 || month === 11){
//   style.color = "pink"
// }else if(month === 12 || month ===1 || month === 2){
//   style.color = "blue"
// }else if(month === 3 || month === 4 || month === 5){
//   style.color = "red"
// }//根据季节改变颜色


ReactDOM.render(  
   <App />,
   document.getElementById("root")
)
