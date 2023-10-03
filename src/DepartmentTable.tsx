import React,{FC,useState, useEffect, MouseEvent, ChangeEvent} from 'react'
import axios from 'axios'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination} from'@mui/material'
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


    useEffect(() => {
        getData()
    },[])


    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const displayedData = deptData.slice(page * rowsPerPage, page *rowsPerPage +rowsPerPage)

    const getData = async () => {
        try{
            const response = await axios.get(props.URL)
            const mappedData: Department[] = response.data.map((item:any) => ({
                name: item['name'],
                state: item.state,
                city: item.city,
                country: item.country,
                zipCode : item.zipCode
            }))

            setDeptData(mappedData)
        }catch(error){
            console.error(error)
        }
    }

    return(
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
        </>)
}

export default DepartmentTable