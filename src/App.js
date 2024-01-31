
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mentor from './Mentor';
import Student from './Student';
import HomePage from './HomePage';
import Assigning from './Assigning';
import UserList from './UserList';
import AssigingChange from './AssigingChange';
import MentorStudentList from './MentorStudentList';
import PreviousMentor from './PreviousMentor';

function App() {
  return (
    <BrowserRouter>

<Routes>
  <Route path='/' element={<HomePage></HomePage>}></Route>
  <Route path="/mentor" element={<Mentor/>}></Route>
  <Route path ="/student" element={<Student/>}></Route>
<Route path='/assigning' element={<Assigning/>}></Route>
<Route path='/userlist' element={<UserList/>}></Route>
<Route path='/assigning_change/:id' element={<AssigingChange/>}></Route>
<Route path='/mentor_student_list' element={<MentorStudentList/>}></Route>
<Route path='/previous_mentor' element={<PreviousMentor/>}></Route>
</Routes>

    </BrowserRouter>
  );
}

export default App;
