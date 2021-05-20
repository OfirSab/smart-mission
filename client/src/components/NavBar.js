import React,{useState,useEffect} from 'react'

const Navbar = () => {
    const [logged,setLogged] = useState(false)

    useEffect( () => {
        fetch(`/Login`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then((response) => response.json())
          .then((ans) => {setLogged(ans);});
    },[])
    const logout = () =>{
        fetch('/Logout',
        {
            method: "POST",
            body: false
        })
        .then((res)=>{ res.json(); })
        .then((data)=>{ setLogged(data) })
    }
    
    // }
//     <div class="alert alert-dark" role="alert">
//   This is a dark alert—check it out!
// </div>
        return (
            <nav className='navbar bg-primary'>
                <h2>
                    <i className="fas fa-users" />Users List Mission
                </h2>
            <ul>
                <li>
                    <a href='/Users'>Users List</a>
                </li>
                <li>
                    {logged ? <a href="/#" onClick={logout}>Log out <i class="fas fa-sign-out-alt"></i></a> :
                     <a href='/Login' >Login</a>}
                </li>
            </ul>
            </nav>
        )
}

export default Navbar
