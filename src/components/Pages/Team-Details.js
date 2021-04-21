 
 import React from 'react'

  export default function teamDetails(){
  return(
 
          <div className='container'>
          <h3 class='text-center mb-3'>
                  Modify Data Table for team members
              </h3>

              <div className='row'>
                  <div class='col-md-8 offset-md-2 mx-auto'> 
                  <div class='table-custom my-5'>                      
                      <div class="table-row font-weight-bold">
                          <div class="table-col"> Sl no</div>
                          <div class="table-col">Team Name</div>
                          <div class="table-col"> Founded </div>
                          <div class="table-col">Address</div>
                          <div class="table-col">Logo</div> 
                      </div>
                  <div class="table-row">
                      <div class="table-col" contentEditable='true'> 3 </div>
                      <div class="table-col" contentEditable='true'> royals </div>
                      <div class="table-col" contentEditable='true'> 2021 </div>
                      <div class="table-col" contentEditable='true'> 145 dannforth </div>
                      <div class="table-col" contentEditable='true'>
                          <img width="50px" src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg"></img>
                   </div>
                        
                    </div>
                  </div>
                  <button class="btn btn-success my-3 ">update data</button>
              </div>
              </div>
          </div>  
  ) }