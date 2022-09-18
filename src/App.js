import { render } from '@testing-library/react';
import React,{ Component } from 'react';
import './App.css';
import asset from "./assets/car.png";
import { Button } from 'react-bootstrap';


class App extends Component{
  state={
    img :asset


  };
  render(){
    return(
      <div className='main' >
        <div class="vertical-menu">
          <a href="#" class="active">• Home</a>
          <a href="#">• Let's Park</a>
          <a href="#">• Tickets</a>
          <a href="#">• Know More</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, alignItems: 'center' }}>
          <span className='text'>
          <h1 className='font-link'>Park It</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
</p>
<button className='button'>Let's Park</button>
          </span>
          <img src= {this.state.img} height='400' margin='30'  alt=""></img>
      
       </div>
       </div>
    )
  }
}
  

export default App;
