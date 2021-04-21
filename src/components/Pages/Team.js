

import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
export default function Team() { 


    let teamInfos = [
        { name: 'royals', founded: 2021, address:'145 dannforth', logo:'https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg' },
        { name: 'royals', founded: 2021, address:'145 dannforth', logo:'https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg' },
        { name: 'royals', founded: 2021, address:'145 dannforth', logo:'https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg' },
        { name: 'royals', founded: 2021, address:'145 dannforth', logo:'https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg' },
        { name: 'royals', founded: 2021, address:'145 dannforth', logo:'https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg' },
        { name: 'royals', founded: 2021, address:'145 dannforth', logo:'https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg' }
    ]

    let teamInfo = teamInfos.map((teamInfo, index) =>      
        
      
        <Link to={"/team-details"} className='rowLink'>  

                    <div className='table-row'>
                        <div className='table-col'> {index + 1} </div>
                        <div className='table-col'> {teamInfo.name} </div>
                        <div className='table-col'> {teamInfo.founded} </div>
                        <div className='table-col'> {teamInfo.address} </div>
                        <div className='table-col'><img width='50px' src={teamInfo.logo}></img> </div>
                    </div>

        </Link>
       
    )

    return (
        <div className='container'> 
            <h3 class='text-center mb-3'>
                Data Table for team members
           </h3>

            <div className='row'>
                <div class='col-md-8 offset-md-2 mx-auto'>  
                    <div class='table-custom'>                       
                        {teamInfo}
                    </div> 
                </div>
            </div>
        </div>
    );
}