import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cards from './Cards'
import DepartmentForm from "./DepartmentForm";
import DepartmentTable from "./DepartmentTable";
import GridCardForm from './GridCardForm'


const App = () => {
    const URL : string = 'http://localhost:8080/department';
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Cards/>}/>
                <Route path='department-form' element={<DepartmentForm URL={URL}/>}/>
                <Route path='/department-table' element={<DepartmentTable URL={URL}/>}/>
                <Route path='/grid-card-form' element={<GridCardForm URL ={URL}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
