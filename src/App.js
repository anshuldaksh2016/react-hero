import React  , {useState} from 'react';
import './App.css';


const styles = {
  margin:"1rem"

}
function App() {
  
  const [name , setName ] = useState("")
  const [age , setAge ] = useState(0);
  const [height , setHeight] = useState(0)
  const [superpower , setSuperPower] = useState("");
  const [display, setDisplay] = useState(false);

 
  return (
    <div className="App">
    
    <h1>Hero</h1>
    <div>
    <label>Name : </label>
    <input type="text" style={styles} onChange={(e) =>setName(e.target.value)} />
    <label>Age</label>
    <input type="number" style={styles} onChange={(e) => setAge(e.target.value)} />
      <label>Height</label>
    <input type="number" style={styles} onChange={e => setHeight(e.target.value)} />
     <label>Superpower</label>
    <input type="text" style={styles} onChange={e => setSuperPower(e.target.value)} />
    </div>

    <button onClick={() => setDisplay(true)}>Display Character </button>

    <div>
    <h3>Hero Info </h3>
    { display && 
    <div>
    <h4>{name}</h4><h5>{age}</h5><p>{height}</p><p>{}superpower</p>
    </div>
    }
    </div>


    </div>
  );
}

export default App;
