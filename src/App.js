import './App.css';
import React, {useState} from 'react';

function App() {


  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [credit, setCredit] = useState(0);

  console.log(name, age, credit)
  return (
    <div>

          <header>
              Credit Form
          </header> 

          {/* Form for name age and credit input */}
          <form>
              <label>
                  Name:
                  <input type="text" 
                  value={name} 
                  onChange=
                  {e => setName(e.target.value)} />
              </label>
              <label>
                  Age:
                  <input type="text" 
                  value={age} 
                  onChange={e => setAge(e.target.value)} />
              </label>
              <label>
                  Credit:
                  <input type="text" 
                  value={credit} 
                  onChange={e => setCredit(e.target.value)} />
              </label>
          </form>

    </div>
  );
}

export default App;
