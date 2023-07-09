import React, {ChangeEvent, FC, FormEvent, useState} from 'react'
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import axios from 'axios'
import DialogComponent from './Dialog'
import {DialogContext} from './DialogContext'
import AppBarComponent from "./AppBarComponent";


interface FormData {
    name: string
    city: string
    state: string
    country: string
    zipCode: string
}

const initialValues: FormData = {
    name: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
}

interface DeptProps {
    URL: string,
    window?: () => Window;
}

const DepartmentForm: FC<DeptProps> = (props) => {
    const [formData, setFormData] = useState<FormData>(initialValues)
    const formErrors: Partial<FormData> = {}
    const [errors, setErrors] = useState<Partial<FormData>>({})
    const nameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
    const [show, setShow] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [state, setState] = useState<string>('');
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formData.name.trim()) {
            formErrors.name = 'Name is required'
        } else if (formData.name.length < 2) {
            formErrors.name = 'Name cannot be less than 2 characters'
        }
        if (!formData.city.trim()) {
            formErrors.city = 'City is required'
        } else if (!nameRegex.test(formData.city.trim())) {
            formErrors.city = 'City cannot be less than 2 characters'
        }
        if (!formData.state.trim()) {
            formErrors.state = 'State is required'
        } else if (formData.state.length < 2) {
            formErrors.state = 'State cannot be less than 2 characters'
        }
        if (!formData.country.trim()) {
            formErrors.country = 'Country is required'
        } else if (formData.country.length < 2) {
            formErrors.country = 'Country cannot be less than 2 characters'
        }
        if (!formData.zipCode.trim()) {
            formErrors.zipCode = 'ZipCode is required'
        } else if (formData.zipCode.length < 2) {
            formErrors.zipCode = 'Zipcode cannot be less than 5 characters'
        }
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }
        const payload = {
            'name': formData.name,
            'state': formData.state,
            'city': formData.city,
            'country': formData.country,
            'zipCode': formData.zipCode
        }

        console.log(JSON.stringify(payload, null, 2))


        console.log(formData)

        axios.post(props.URL, JSON.stringify(payload, null, 2), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data)
            if (response.status === 201) {
                setSuccess(true)
                setShow(true)
            } else {
                console.log(response)
                handleOnError()
            }
        }).catch(error => {
            console.error(error)
            handleOnError()
        })

        /* axios.get('http://localhost:8080/department-service')
             .then(response => {
                 console.log(response)
                 if(response.status === 200){
                     setSuccess(true)
                     setShow(true)
                 }else{
                     handleOnError()
                 }
             }).catch(error => {
                 console.log(error)
                 handleOnError()
         })*/
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData((prevFormData: FormData) => ({
            ...prevFormData,
            [name]: value,

        }))
        setErrors((prevFormData: Partial<FormData>) => ({
            ...prevFormData,
            [name]: ''
        }))
    }


    const clearForm = () => {
        setFormData(initialValues)
        setErrors({})
    }

    const handleOnError = () => {
        setShow(true)
        setSuccess(false)
    }

    const value = {show, setShow, success, setSuccess}


    const stateList = [
        'Arizona',
        'California',
        'Illinois',
        'New York',
        'New Jersey'
    ];

    const handleSelectOnChange = (event: SelectChangeEvent) => {
        const {name, value} = event.target
        setFormData((prevFormData: FormData) => ({
            ...prevFormData,
            [name]: value
        }))
        setErrors((prevErrors: Partial<FormData>) => ({
            ...prevErrors,
            [name]: ''
        }))
    }

    return (
        <>
            <div style={{margin: '2em'}}>
                <form onSubmit={handleOnSubmit} style={{maxWidth: '50em'}}>
                    <Typography variant='h5' style={{letterSpacing: '0.1em'}}>Department Form</Typography>

                    {show && <DialogContext.Provider value={value}>
                        <DialogComponent/>
                    </DialogContext.Provider>

                    }


                    <TextField label='Name' name='name' value={formData.name}
                               onChange={handleOnChange} error={!!errors.name} helperText={errors.name}
                               fullWidth margin='normal' inputProps={{maxLength: 50}}/>

                    {/*<TextField label='State' name='state' value={formData.state}*/}
                    {/*           onChange={handleOnChange} error={!!errors.state} helperText={errors.state}*/}
                    {/*           fullWidth margin='normal' inputProps={{maxLength: 50}}/>*/}

                    <FormControl fullWidth>
                        <InputLabel>State</InputLabel>
                        <Select
                            name="state"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.state}
                            label="state" onChange={handleSelectOnChange}>
                            <MenuItem value=" "> </MenuItem>
                            {stateList.map((state) => (
                                <MenuItem key={state} value={state}>
                                    {state}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField label='City' name='city' value={formData.city}
                               onChange={handleOnChange} error={!!errors.city} helperText={errors.city}
                               fullWidth margin='normal' inputProps={{maxLength: 50}}/>

                    <TextField label='Country' name='country' value={formData.country}
                               onChange={handleOnChange} error={!!errors.country} helperText={errors.country}
                               fullWidth margin='normal' inputProps={{maxLength: 50}}/>

                    <TextField label='Zip Code' name='zipCode' value={formData.zipCode}
                               onChange={handleOnChange} error={!!errors.zipCode} helperText={errors.zipCode}
                               fullWidth margin='normal' inputProps={{maxLength: 50}}/>

                    <Grid container direction='row' spacing={4}>
                        <Grid item>
                            <Button size='small' variant='contained' type='submit'
                                    style={{minWidth: '10em'}}>SUBMIT</Button>
                        </Grid>
                        <Grid item>
                            <Button size='small' onClick={clearForm} variant='outlined'
                                    style={{minWidth: '10em'}}>CLEAR</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )

}


export default DepartmentForm