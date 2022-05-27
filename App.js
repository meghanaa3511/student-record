
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Authpage from './Pages/Authpage/Auth.component.js';
import RecordData from './RecordData/RecordData.component';
import RecordList from './RecordList/RecordList.component';
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Authpage />}/>
    <Route path='/record-data' element={<RecordData />}/>
    <Route path='/record-list' element={<RecordList />}/>

    </Routes>
    </BrowserRouter>
  )
}
 
export default App;