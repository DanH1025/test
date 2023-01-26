import axios from 'axios'
import React ,{useState, useEffect} from 'react'

import './cars.css'

export default function CarList({id , name ,price, detail , feature, images , includes}) {

   


    const [current , setCurrent]= useState(0)
   


    const autoScroll =true

    let slideInterval;
    let intervalTime= 7000


    const nextSlide = ()=>{
        setCurrent(current === images.length - 1 ?  0 : current + 1)
      }
      const prevSlide =()=>{
        setCurrent(current === 0?  images.length-1: current - 1)
      }
   
    function auto (){
        slideInterval = setInterval(nextSlide , intervalTime)
    }
   

      //resart the image slide to initial positioon when the page loads
    //   useEffect(()=>{    
    //     setCurrent(0)  
      
    //   },[])


    //   useEffect(()=>{
    //     if(autoScroll){
    //        auto()
    //     }
    //     return ()=>  clearInterval(slideInterval)
    //  }, [current])  

     console.log(feature)

  return (
    
    <div className='car'>
        <div className='slideHolder'>
            <div className='slider'>
              <div className='btns'>
                <button onClick={prevSlide} >Back</button>
                <button onClick={nextSlide}>Next</button>
              </div>
               


 {
          images?.map((image,index)=>{
            console.log(index)
            return(
              <div className='sliderImageContainer' key={index}>
                  <div className={index === current ? 'slide current' : 'slide'}>
                      {
                        index === current && (
                          <>
                            <img src={image} alt={'Placee holder image'} />   

                                    <p>Book now</p>
                                    <input type="date"  />
                                    <button>Submit</button>

                                
                         
                          </>
                        )
                      }
                  </div>
              </div>
            )
          })
        }
            </div>
        </div>

        <div className='details'>
            <h1>Name: {name}</h1>

            <h2>Price : {price} ETB</h2>
            <p>Deatils: {detail}</p>

            <h3>Features</h3>
            <ul>
                {
                    feature.map(name=>{
                        return(
                            <li>{name}</li>
                        )
                    })
                }
            </ul>

            <h3>Includes</h3>

            <ul>
                {
                    includes.map(item=>{
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </ul>

        </div>
    </div>
  )
}
