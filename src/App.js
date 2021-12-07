import './styles/App.css';
import BG from "./asset/svg/BG"
import Cart from './asset/svg/Cart';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';
import { loginApi } from "./utils/fakeApi"
function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  // created func
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // check all inputs 
    if (email && password) {
      // make api request
      
      // 
      setLoading(true);
      try {
        console.log({email, password})
        let response = await loginApi(email, password)
        if (response.ok) {
          alert('successfull login')
          setEmail("")
          setPassword("")
        } else {
          alert('login failed')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      // feedback 
      alert('please fill the form')
    }
    setLoading(false)
  } 

  return (
    <div className="App" id="sa">
      <div className="form-container">    
        <form
          action=""
          method="POST" className="login__form"
          onSubmit={handleSubmit}
        >
          <h1 className="logo">
            <Cart/>
          </h1>

          <Input value={email} name="email" type="text" required onChange={(evt) => {
            setEmail(evt.target.value)
          }}/>
          
          <Input
            name="password"
            type="password"
            // required
            value={password}
            onChange={(evt) => {
            setPassword(evt.target.value)
          }}
          />
          <div className="btn-wrap">
          <Button name={loading ? "loading" :  "Login"}/>
          </div>
        </form>
      </div>
      <div className="bg-image">
        {/* svg image */}
        <BG />
      </div>
    </div>
  
  );
}

export default App;
