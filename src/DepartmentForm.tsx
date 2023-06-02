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

   const handleOnSubmit = (event : FormEvent<HTMLFormElement>) => {

}

const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
 const {name, value} = event.target
    setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        [name]: value
    }))
}


    return(
        <div style={{margin: '2em'}}>
          <form onSubmit={handleOnSubmit} style={{maxWidth: '50em'}}>
             <Typography variant='h5' style={{letterSpacing: '0.1em'}}>Department Form</Typography>
              <TextField label='Name' name='name' value={formData.name}
              onChange={handleOnChange} error={!!errors.name} helperText={errors.name}
              fullWidth margin='normal' inputProps={{maxLenght: 50}}/>
          </form>
        </div>
    )
}

export default DepartmentForm