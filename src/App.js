import './App.css';
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import YTvideoss from './components/Youtube/ytvideos';
import WorkoutPage from './components/Youtube/WorkoutPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/workouts' element = {<WorkoutPage/>}/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
