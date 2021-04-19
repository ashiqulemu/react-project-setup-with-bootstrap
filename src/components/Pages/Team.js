

import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
export default function Team() {


    let teamInfos = [
        { name: 'royals', age: 12  },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 },
        { name: 'royals', age: 12 }
    ]

    let teamInfo = teamInfos.map((teamInfo,index)=>      
        
        <Link to='/team-details' className='rowLink'>
         <tr>
            <td>  {index + 1} </td>
            <td>  {teamInfo.name} </td>
            <td> {teamInfo.age} </td> 
          </tr>  
        </Link>
    )
 
    return (
        <div className='container'>
                 
            <h3 class='text-center'>
                Data Table for team members
           </h3>

           <div className='row'>
               <div class='col-md-8 offset-md-2 mx-auto'>
                    <table class='table'>
                        <tr>
                            <td>Sl</td>
                            <td>Name</td>
                            <td>age</td>
                        </tr>
                              {teamInfo}
                    </table>                  
               </div>
           </div>
        </div>
    );
}