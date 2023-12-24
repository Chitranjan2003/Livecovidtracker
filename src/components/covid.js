import React, { useEffect, useState } from 'react'
import  './covid.css';

const Covid = () => {

    const [data, setData] = useState([])
  const  getCovidData = async ()=>{

    try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json()
        setData(actualData.statewise[0])
    } catch (error) {
        console.log(error)
    }
      
  }
    useEffect(() => {
       
    getCovidData();
      
    }, [])
    
  return (
    <>
    <h1>🔴 Live</h1>
   <h2>COVID-19 CORONAVIRUSE TRACKER</h2>
     
   
     
   <div>
   <ul>
    <li className='card'>
    <p><span>OUR</span> COUNTRY</p>
    <h3>INDIA</h3>
    </li>
    <li className='card'>
    <p><span>TOTAL</span> RECOVERY</p>
    <h3>{data.recovered}</h3>
    </li>
    <li className='card'>
    <p><span>TOTAL</span> CONFIRMED</p>
    <h3> {data.confirmed}</h3>
    </li>
    <li className='card'>
    <p><span>TOTAL</span> DEATHS</p>
    <h3>{data.deaths}</h3>
    </li>
    <li className='card'>
    <p><span>TOTAL</span> ACTIVE</p>
    <h3>{data.active}</h3>
    </li>
    <li className='card'>
    <p><span>TOTAL</span> UPDATED</p>
    <h3>{data.lastupdatedtime}</h3>
    </li>
   </ul>
    </div>         
    </>
  )
}

export default Covid