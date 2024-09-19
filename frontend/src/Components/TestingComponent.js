import { useEffect, useState } from "react"
import axios from "axios"
function TestingComponent(){
    // const [query,setQuery]=useState("")
    // const handleSearch=(e)=>{
    //        setQuery(e.target.value)
    // }
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'fsq3FhDdC3CqU753/uAdU7ytSv0Kaiv4/EuPrV0NHOIFKmk='
    //     }
    //   };
      
    //   fetch('https://api.foursquare.com/v3/autocomplete', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // useEffect(()=>{
    //     const res=axios.get(`https://api.foursquare.com/v3/autocomplete`)
    // })
    // return(
    //     <>
    //     <form className="col-3 mb-2 mb-lg-0" role="search" style={{marginRight: '20px',backgroundColor: '#f2f2f2'}}>
    //     <input type="search" className="form-control" value={query} onChange={handleSearch} placeholder="Search..." aria-label="Search" />
    //     </form>
    //     </>
    // )
    const options = {method: 'GET', headers: {accept: 'application/json'}};

const response=fetch('https://api.foursquare.com/v2/venues/502e86dee4b047efecf80622/photos?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))
  console.log(response)
  

}
export default TestingComponent