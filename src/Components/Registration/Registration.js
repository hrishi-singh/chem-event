import React,{useState} from 'react'
//import { Form } from 'react-bootstrap'
import Axios from 'axios';

const Registration = () => {

  const [user,setUser] = useState({
      name:"",
      email:"",
      password: "",
      password2: ""
  })
  /*
  const handleChange = e =>{
  const {name,value} = e.target
  setUser({
  ...user,//spread operator 
  [name]:value
  })
  }
  */

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({...values, [name]: value}))
  }



  //register function 
  const egister = (e)=>{
  e.preventDefault();
  const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2
    }
  alert(newUser.name)
  Axios.post("http://localhost:3030/api/users/register",newUser).then((response) => console.log(response))
  .catch((error) => console.log(error));
  /*
  const {name,email,password,password2} = user
  
  if (name && email && password && password2){
  
  axios.post("http://localhost:3030/api/users/register",user )
  .then(res=>console.log(res))
  }
  else{
    alert("invalid input")
  };*/
  setUser({
    name:"",
    email:"",
    password: "",
    password2: ""
})

}


    return (

      <form onSubmit={egister}>
        {/*
      <label>
        Name:
        <input type="text" value={user.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" value={user.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="text" value={user.password} onChange={handleChange}/>
      </label>
      <label>
        Confirm password:
        <input type="text" value={user.password2} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" onSubmit={egister}/>
    */}

      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={user.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Email:
        <input 
          type="text" 
          name="email" 
          value={user.email || ""} 
          onChange={handleChange}
        />
        </label>
  
        <label>Password:
      <input 
        type="text" 
        name="password" 
        value={user.password || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Confirm password:
      <input 
        type="text" 
        name="password2" 
        value={user.password2 || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />

      </form>
    )
}

export default Registration