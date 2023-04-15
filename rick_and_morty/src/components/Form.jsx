
import { useState } from "react"
const Form = () => {
const [userData , setUserData] = useState({
    email : "" ,
    password : ""
  })
  const handleChange = (event) =>{
    [event.target.name] = event.target.value
  }
    return(
        <form>
<label htmlFor="email"></label>
<input type="text" name="email" placeholder="escribe tu email" value={userData.email} ></input>

<label htmlFor="password"></label>
<input type="text" name="password" placeholder="password" value={userData.password} ></input>

<button>Submit</button>
        </form>
    )
}
export default Form