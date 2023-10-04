import React,{FC,useState, useEffect, MouseEvent, ChangeEvent} from 'react'
import axios from 'axios'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Button,
    IconButton, Dialog, DialogTitle, DialogContent, TextField, Grid
} from '@mui/material'
interface Department {
    name : string
    city : string
    state : string
    country : string
    zipCode : string
}

interface DeptProps {
    URL : string
}

const DepartmentTable : FC <DeptProps>= (props) => {
    const [deptData, setDeptData] = useState<Department[]>([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedDept, setSelectedDept] = useState<Department | null>(null);
    const [editedDept, setEditedDept] = useState<Department | null>(null);

    const handleEditClick = (dept: Department) => {
        setSelectedDept(dept);
        setEditedDept({...dept});
        setEditOpen(true);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
        if (editedDept) {
            setEditedDept({
                ...editedDept,
                [fieldName]: event.target.value,
            });
        }
    }

    const handleOnClose = () => {
            setEditOpen(false);
    }

    const handleOnSave = () => {
        if (selectedDept && editedDept) {
            const updatedData = deptData.map((dept) =>
                dept.name === selectedDept.name ? editedDept : dept
            );
            setDeptData(updatedData);
        }
        setEditOpen(false);
    };


        useEffect(() => {
            getData()
        }, [])


        const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        };

        const displayedData = deptData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

        const getData = async () => {
            try {
                const response = await axios.get(props.URL)
                const mappedData: Department[] = response.data.map((item: any) => ({
                    name: item['name'],
                    state: item.state,
                    city: item.city,
                    country: item.country,
                    zipCode: item.zipCode
                }))

                setDeptData(mappedData)
            } catch (error) {
                console.error(error)
            }
        }

        return (
            <>
                <TableContainer style={{margin: 20}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>zipCode</TableCell>
                                <TableCell>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayedData.map((item) => (
                                <TableRow key={item.name}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.state}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.country}</TableCell>
                                    <TableCell>{item.zipCode}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleEditClick(item)} color="primary">
                                            Edit
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15, {label: 'All', value: -1}]}
                        component="div"
                        count={deptData.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>

                <Dialog open={editOpen} onClose={handleOnClose}>
                    <DialogTitle>Edit Department</DialogTitle>
                    <DialogContent >
                        {editedDept && (
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ marginTop: "16px" }}>
                                    <TextField
                                        label="Name"
                                        fullWidth
                                        value={editedDept.name}
                                        onChange={(event) => handleInputChange(event, "name")}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="State"
                                        fullWidth
                                        value={editedDept.state}
                                        onChange={(event) => handleInputChange(event, "state")}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="City"
                                        fullWidth
                                        value={editedDept.city}
                                        onChange={(event) => handleInputChange(event, "city")}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Country"
                                        fullWidth
                                        value={editedDept.country}
                                        onChange={(event) => handleInputChange(event, "country")}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="ZipCode"
                                        fullWidth
                                        value={editedDept.zipCode}
                                        onChange={(event) => handleInputChange(event, "zipCode")}
                                    />
                                </Grid>
                            </Grid>
                        )}
                        <Button onClick={handleOnSave}>Save</Button>
                        <Button onClick={handleOnClose}>Cancel</Button>
                    </DialogContent>
                </Dialog>
            </>)
    }

export default DepartmentTable