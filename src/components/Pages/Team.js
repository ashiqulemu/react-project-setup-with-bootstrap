

import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
export default function Team() {


    let teamInfos = [
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 }
    ]

    let teamInfo = teamInfos.map((teamInfo,index)=>      
        
        <Link to= {"/team-details"} className='rowLink'>
            <div class='table-row'>
                <div class='table-col'>  {index + 1} </div>
                <div class='table-col'>  {teamInfo.name}  </div>
                <div class='table-col'> {teamInfo.age} </div>
            </div>
        </Link>
    )
 
    return (
        <div className='container'>
                 
            <h3 class='text-center'>
                Data Table for team members
           </h3>

           <div className='row'>
               <div class='col-md-8 offset-md-2 mx-auto'>
                    <div class='table-custom'>
                       <div class='table-row'>
                            <div class='table-col'> </div>
                            <div class='table-col'> </div>
                            <div class='table-col'> </div>
                       </div>
                              {teamInfo}
                    </div>                  
               </div>
           </div>
        </div>
    );
}