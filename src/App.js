import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'

import './assets/css/App.scss';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="" element={<DayList/>}/>
       <Route path="day" element={<Day/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
