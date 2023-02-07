import './App.css';
import Main from './Main';
import Forecast from './Forecast';

function App() {
  return (
       <div className="city">
<p className="intro"> The weather app</p>
 <form>
 <input type="text" placeholder="Enter your city here" />
   <input className="btn" type="submit" value="Search" />
        <input className="current" type="submit" value="Current" />
  </form>
   <Main />
      <Forecast />
</div>

  );
}

export default App;
