import { useEffect, useState } from "react"
import axios from "axios"
function TestingComponent(){
    const [query,setQuery]=useState("")
    const handleSearch=(e)=>{
           setQuery(e.target.value)
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'fsq3FhDdC3CqU753/uAdU7ytSv0Kaiv4/EuPrV0NHOIFKmk='
        }
      };
      
      fetch('https://api.foursquare.com/v3/autocomplete', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    useEffect(()=>{
        const res=axios.get(`https://api.foursquare.com/v3/autocomplete`)
    })
    return(
        <>
        <form className="col-3 mb-2 mb-lg-0" role="search" style={{marginRight: '20px',backgroundColor: '#f2f2f2'}}>
        <input type="search" className="form-control" value={query} onChange={handleSearch} placeholder="Search..." aria-label="Search" />
        </form>
        </>
    )
}
export default TestingComponent