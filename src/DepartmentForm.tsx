import React, {ChangeEvent, FC, FormEvent, useState} from 'react'
import {TextField, Grid, Button, Typography} from "@mui/material";


interface FormData
{
    name : string
    city : string
    state : string
    country : string
    zipCode : string
}

const initialValues: FormData = {
    name: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
}

const DepartmentForm: FC = () => {
    const[formData, setFormData] = useState<FormData>(initialValues)
    const formErrors: Partial<FormData> = {}
    const [errors, setErrors] = useState<Partial<FormData>>({})
    const nameRegex =  /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
   const handleOnSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
       if(!formData.name.trim()){
           formErrors.name= 'Name is required'
       }else if(formData.name.length < 2){
           formErrors.name = 'Name cannot be less than 2 characters'
       }else if(!nameRegex.test(formData.name.trim())){
           formErrors.name = "Name should be provided in correct format and cannot contain '&,$,?'"
       } else if(formData.city.length < 2){
           formErrors.city = 'City cannot be less than 2 characters'
       }else if(formData.state.length < 2){
           formErrors.state = 'State cannot be less than 2 characters'
       }else if(formData.country.length < 2){
           formErrors.country = 'Country cannot be less than 2 characters'
       }else if(formData.zipCode.length < 2){
           formErrors.zipCode = 'Zipcode cannot be less than 5 characters'
       }
       if(Object.keys(formErrors).length<2){
           setErrors(formErrors)
           return
       }
}

const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
 const {name, value} = event.target
    setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        [name]: value
    }))
}

const clearForm = () =>{
        setFormData(initialValues)
        setErrors({})
}


    return(
        <div style={{margin: '2em'}}>
          <form onSubmit={handleOnSubmit} style={{maxWidth: '50em'}}>
             <Typography variant='h5' style={{letterSpacing: '0.1em'}}>Department Form</Typography>
              <TextField label='Name' name='name' value={formData.name}
              onChange={handleOnChange} error={!!errors.name} helperText={errors.name}
              fullWidth margin='normal' inputProps={{maxLenght: 50}}/>

              <TextField label='City' name='city' value={formData.city}
              onChange={handleOnChange} error={!!errors.city} helperText={errors.city}
              fullWidth margin='normal' inputProps={{maxLenght: 50}}/>

              <TextField label='State' name='state' value={formData.state}
              onChange={handleOnChange} error={!!errors.state} helperText={errors.state}
              fullWidth margin='normal' inputProps={{maxLenght: 50}}/>

              <TextField label='Country' name='country' value={formData.country}
              onChange={handleOnChange} error={!!errors.country} helperText={errors.country}
              fullWidth margin='normal' inputProps={{maxLenght: 50}}/>

              <TextField label='Zip Code' name='zipCode' value={formData.zipCode}
              onChange={handleOnChange} error={!!errors.zipCode} helperText={errors.zipCode}
              fullWidth margin='normal' inputProps={{maxLenght: 50}}/>

              <Grid container direction='row' spacing={4}>
                  <Grid item>
                      <Button size='small' variant='contained' type='submit' style={{minWidth:'10em'}}>SUBMIT</Button>
                  </Grid>
                  <Grid item>
                      <Button size='small' onClick = {clearForm} variant='outlined' style={{minWidth:'10em'}}>CLEAR</Button>
                  </Grid>
              </Grid>
          </form>
        </div>
    )
}

export default DepartmentForm