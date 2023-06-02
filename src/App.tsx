import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cards from './Cards'
import DepartmentForm from './DepartmentForm'

const App = ()  => {
  return (
   <Router>
     <Routes>
       <Route path = '/' element = {<Cards/>}/>
         <Route path='department-form' element={<DepartmentForm/>}/>
     </Routes>
   </Router>
  );
}

export default App;
