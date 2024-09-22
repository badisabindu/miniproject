import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function VenueComponent(){
    
    const params=useParams();
    const [imgUrl,setImgUrl]=useState('');
    const [venueName,setVenueName]=useState('');

    useEffect(()=>{
        const handleVenue = async ()=>{
            try{
                const id={params};
                console.log(id);
                const options = {method: 'GET', headers: {accept: 'application/json'}};
                const response=await fetch(`https://api.foursquare.com/v2/venues/4bc95d44fb84c9b6d5101b3e/?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`, options);
                const data=await response.json();
                console.log(data.response);
                const pic=data.response.venue.bestPhoto;
                setImgUrl(pic.prefix+pic.height+"x"+pic.width+pic.suffix);
                setVenueName(data.response.venue.name);
                // console.log(venueName)
            }
            catch(err){
                console.log(err);
            }
        }
        handleVenue();
    })

    return(
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Card className="mb-3" style={{ maxWidth: '800px' }}>
                    <img 
                        src={imgUrl} 
                        alt="Venue" 
                        style={{ height: "300px", width: "500px" }}
                        decoding="async"
                        className="img-fluid"
                    />
                    <h2 className="d-flex justify-content-center align-items-center">{venueName}</h2>
                    
                </Card>
            </div>        
        </>
    );
}
export default VenueComponent;