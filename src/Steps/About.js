import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state"; 
import { Button, Field, Form, Input,Redio } from "../Forms";
import React, { useState } from 'react';
 
import { Jobs } from "../Components/About/Jobs"; 
 
export const About = () => {
	 
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  
	const [showMarried, setShowMarried] = useState(true);  // Show Married section
	const [showIfMarried, setShowIfMarried] = useState(false);
	const [showHousehold, setShowHousehold] = useState(false); // Hide Household section
	const [showAge, setShowAge] = useState(false);
	const [showJobs, setShowJobs] = useState(false);
	
	const [attributeValue, setAttributeValue] = useState('initialValue');
  
	const navigate = useNavigate();

	const saveMarriedData = (data) => {
		setState({ ...state, ...data });
		document.getElementById("example").setAttribute("data-percentage", 3);
		if (data.married == 'Single' ) {
			setShowMarried(false)
			setShowHousehold(true)
		} else {
			setShowMarried(false)
			setShowIfMarried(true)
		}
	};
	
	const PreviousMarried = () => {
		document.getElementById("example").setAttribute("data-percentage", 6);
		setShowMarried(true)
		setShowHousehold(false)
	}
  

	const saveDataSpouse = (data) => {
	 setState({ ...state, ...data });
	 setShowAge(true)
	 setShowIfMarried(false)
  };
  const PreviousMarriedSpouse = () => {
	  document.getElementById("example").setAttribute("data-percentage", 9);
	    setShowMarried(true)
		setShowIfMarried(false)
  }
  


  const saveDataHouse = (data) => {
	  document.getElementById("example").setAttribute("data-percentage", 9);
		setState({ ...state, ...data });
		if (data.married == 'Yeshousehold' ) {
		   setShowHousehold(false)
		   setShowAge(true)
		} else {
			  setShowHousehold(false)
		   setShowAge(true)
		}
	};

     const saveDataAge = (data) => {
		 document.getElementById("example").setAttribute("data-percentage", 12);
		setState({ ...state, ...data });
		setShowAge(false)
		setShowJobs(true)
		
	};

const PreviousHousehold  = () => {
	 
	if(state.married == "Married"){
		setShowIfMarried(true)
		   setShowAge(false)
	}
	else{
		setShowHousehold(true)
		   setShowAge(false)
	}
	
  }


 const saveDataJobs = (data) => {
		//alert('s')
	};

  return (
	<div class="w4-main-container">
		{showMarried && (
			<Form  id="steps-1" class="tab-wizard wizard-circle wizard clearfix" onSubmit={handleSubmit(saveMarriedData)}>
			<h2 class="text-center font-weight-bold">Are you single or married?</h2>
			<p class="text-center">This will help us determine your filing status, standard deduction, and which credits you can claim.</p>
			<div class="status-panel">
				<ul class="selection-panel mt-5 p-4">
					<li>
						<div class="form-check py-3">
							<input  {...register("married", { required: "Please select an option" })} value="Single" type="radio" class="form-check-input" name="married" id="validationCustom01" />
							<label class="form-check-label single">
								Single
							</label>
						</div>
					</li>
					<li>
						<div class="form-check py-3">
							<input  {...register("married", { required: "Please select an option" })}  value="Married" type="radio" class="form-check-input" name="married" id="validationCustom02" />
							<label class="form-check-label married">
								Married
							</label>
							
						</div>
						
					</li>
					 {errors.married && <p class="text-center mt-5"><span class="error_msg text-danger mx-auto mt-5">{errors.married.message}</span></p>}
				</ul>
			</div>
			<div class="form-footer mt-5 pt-4 text-center">
				<button  class="btn btn-primary">Next</button>
			</div>
				 
			</Form>		
		)}
	 
	{showHousehold && ( 
		<Form  id="steps-2" class="tab-wizard wizard-circle wizard clearfix" onSubmit={handleSubmit(saveDataHouse)}>
        <h2 class="text-center font-weight-bold">Are you the head of household?</h2>
			<p class="text-center">Head of Household is a filing status for unmarried persons with a qualified person.</p>
            <div class="status-panel">
				<ul class="selection-panel mt-5 p-4">
					<li>
						<div class="form-check py-3">
							<input  {...register("household", { required: "Please select an option" })} value="Yeshousehold" type="radio" class="form-check-input" name="household"  />
							<label class="form-check-label yes">
								Yes
							</label>
						</div>
					</li>
					<li>
						<div class="form-check py-3">
							<input  {...register("household", { required: "Please select an option" })}  value="Nohousehold" type="radio" class="form-check-input" name="household" />
							<label class="form-check-label no">
							No
							</label>
							
						</div>
					</li>
					{errors.household && <p class="text-center mt-5"><span class="error_msg text-danger mx-auto mt-5">{errors.household.message}</span></p>}
				</ul>
			</div>
			<div class="form-footer mt-5 pt-4 text-center">
				<button class="btn btn-w4-success Previousform" onClick={PreviousMarried}>previous</button>
				<button  class="btn btn-primary">Next</button>
			</div>
		</Form>		
    )}
	
		{showAge && ( 
		<Form  id="steps-3" class="tab-wizard wizard-circle wizard clearfix" onSubmit={handleSubmit(saveDataAge)}>
			<h2 class="text-center font-weight-bold">Enter your age as of Jan 1, 2024.</h2>
			<p class="text-center">This helps us determine which age-specific tax breaks you might qualify for.</p>
            <div class="jobs-panel" >
                <ul class="selection-panel">
                    <li>
						<div class="tool-input position-relative my-2" >
							<input  {...register("yourage", { required: "This field is required" })} type="number" name="yourage"   />
                            <label for="" id="label">Age</label>
						</div>
                    </li>
                    {errors.yourage && <p class="text-center mt-5"><span class="error_msg text-danger mx-auto mt-5">{errors.yourage.message}</span></p>}
                </ul>
            </div>
			<div class="form-footer mt-5 pt-4 text-center">
				<button class="btn btn-w4-success Previousform" onClick={PreviousHousehold}>previous</button>
				<button  class="btn btn-primary">Next</button>
			</div>
		</Form>	
    )}
	 
	{showIfMarried && ( 
		<Form  id="steps-3" class="tab-wizard wizard-circle wizard clearfix" onSubmit={handleSubmit(saveDataSpouse)}>
			<h2 class="text-center font-weight-bold">Do you plan to file with your spouse?</h2>
			<p class="text-center">In most cases, filing jointly with your spouse results in a lower tax bill. This means you and your spouse report combined income and deduct your combined expenses. Choose No if you're married and plan to file separately.</p>
             <div class="status-panel">
				<ul class="selection-panel mt-5 p-4">
					<li>
						<div class="form-check py-3">
							<input  {...register("spouse", { required: "Please select an option" })} name="spouse" value="Yes" type="radio" class="form-check-input"  />
							<label class="form-check-label yes">
								Yes
							</label>
						</div>
					</li>
					<li>
						<div class="form-check py-3">
							<input  {...register("spouse", { required: "Please select an option" })} name="spouse"  value="No" type="radio" class="form-check-input"  />
							<label class="form-check-label no">
							No
							</label>
							
						</div>
					</li>
					{errors.spouse && <p class="text-center mt-5"><span class="error_msg text-danger mx-auto mt-5">{errors.spouse.message}</span></p>}
				</ul>
			</div>
			<div class="form-footer mt-5 pt-4 text-center">
			<button class="btn btn-w4-success Previousform" onClick={PreviousMarriedSpouse}>previous</button>
				 
				<button  class="btn btn-primary">Next</button>
			</div>
		</Form>
    )} 
	 {showJobs && ( 
	 <Form  id="steps-13" class="tab-wizard wizard-circle wizard clearfix" onSubmit={handleSubmit(saveDataJobs)}>
		<Jobs   />
	  </Form>
	  )} 
</div>	
 	
  );
};
