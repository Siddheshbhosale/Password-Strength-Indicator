import { useState } from "react";

import Passwordstrength from "./components/Passwordstrength";

function App() {
  
  const[password, setPassword ] = useState('')
  const[showhidden,setshowhidden] = useState('password')
  
  return (
    <div className="container">
            <div className="col-md-6 mx-auto text-right mt-5" >

              <h3 className="text-center">Password strength</h3>

              <div className="form-group mb-2 mt-3 d-flex position-relative" >

                <input 
                  type={showhidden} className="inputname form-control shadow-none" placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />

                <span style={{ position:'absolute', right:'20px',top:'5px',fontSize:'18px',cursor:'pointer',fontWeight:'bold'}} onClick={()=> setshowhidden(showhidden==='password'?'text':'password')}>
                  {showhidden==='password'?'Show':'Hide'}
                </span>

              </div>
              
              {/*password is variable passed and {password} is value to password*/}
              <Passwordstrength password= {password} />
            </div>
    </div>
  );
}

export default App;