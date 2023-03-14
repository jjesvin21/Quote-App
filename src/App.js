import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBody from './components/AppBody/AppBody';
import Bookmark from './components/BookMark/Bookmark';
import { QuatesContextProvider } from './components/Context/QuatesContext';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <QuatesContextProvider>
    <div className="App">
      <div className='OuterDiv'>
      <div className='NavBar'><NavBar></NavBar></div>
      <Routes>
        <Route path = "/" element ={<AppBody/>}></Route>
        <Route path='/bookmark' element={<Bookmark></Bookmark>}></Route>
      </Routes>
      </div>
    </div>
    </QuatesContextProvider>
  );
}

export default App;
