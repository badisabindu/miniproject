import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { Card ,Container} from "react-bootstrap";

const VenuesComponent=()=>{
  const{lat,long,r,catId}=useParams()
  const[imgUrls,setImgUrls]=useState([])
  useEffect(()=>{
     fetchVenueData();
  },[])
  const fetchVenueData=async()=>{
     try{
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      let url=`https://api.foursquare.com/v2/search/recommendations?v=20231010&ll=${lat}%2C${long}&radius=${r*10000}&categoryId=${catId}&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`
      const response=await fetch(url,options)
      const data=await response.json();
     const items=data.response.group.results
     const urls = items.map(item => {
      const photo = item.photo;
      if (photo) {
        console.log(photo.prefix);
        return `${photo.prefix}${photo.height}x${photo.width}${photo.suffix}`;
    } else {
        return null; // or handle cases where photo is not available
    }
  });
  setImgUrls(urls)
    
     }
     catch(err){
         console.log(err)
     }
  }

   return(
    <>
    <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
         {imgUrls.map((url,index) =>
        <Card className="product-card" key={index} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={url} style={{ height: '250px', width: '20rem' }} />
        </Card>
          )}
      </Container>
      </>
   )
}
export default VenuesComponent