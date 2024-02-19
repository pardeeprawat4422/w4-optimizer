import React from 'react';
 
export const Jobs = () => {
	 
 return(
        <div>
            
               <h1 class="text-center font-weight-bold">How many total jobs do you and your spouse currently have?</h1>
                    <p class="text-center">List all jobs that provide a W-2 (do not include 1099 jobs).</p>
                    
                    <div class="jobs-panel" >
                        
                        <ul class="selection-panel">
                            
                            <li>
                                <div class="tool-input position-relative my-2" >
                                    <select class="form-control" id="selectInput"  onchange="addClassToSelectLabel()">
                                        <option value="option1">One</option>
                                        <option value="option2">Two</option>
                                        <option value="option3">Three</option>
                                        <option value="option4">Four</option>
                                        <option value="option5">Five</option>
                                    </select>
                                    <label for="" id="label1">Total jobs </label>
                                </div>
                            </li>
                            
                        </ul>
                    </div>

                    

                    <div class="form-footer mt-5 pt-4 text-center">
                        <button  class="btn btn-primary">Next</button>
                    </div>
             
        </div>
    );
};
