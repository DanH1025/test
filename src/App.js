import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import CarList from './cars'
import { useEffect, useState } from 'react';

function App() {

  const [car , setCar] = useState([])

  useEffect(()=>{
      const getCars = async()=>{
         try{
          const res = await axios.get('https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96')

          setCar(res.data.cars)
          console.log(res.data)
         }catch(err){
           console.log('errr while fetching')
           setCar([])
         }

      }
      getCars()
  },[])

  

  return (
    <div className='carlist'>

        {
          car?.map((item , index)=>{
            return(
              <CarList
              id= {item.id}
              name = {item.carName}
              price ={item.carPrice}
              detail = {item.detail}
              feature = {item.features}
              images ={item.images} 
              includes = {item.includedInThePrice}
      
      
      
            />
            )
          })
        }

     
    </div>
  );
}

export default App;
