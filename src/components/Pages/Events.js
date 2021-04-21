import React from 'react'; 
  
    export default function Events(){ 

      function doClick(e){
        console.log(e)
      } 
        return( 

          <div>
            <h1>CLICK EVENT</h1>

            <button onClick={doClick.bind(this,'hello im parameter')}> click me </button>
            
          </div>

        )


    }

  
