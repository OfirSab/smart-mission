import React,{useState,useEffect} from 'react';
import User from './User'

const Users = () =>{
    const [users,setUsers] = useState([])
    const [usersNoAuth,setUsersNoAuth] = useState([])
    const [add,setAdd] = useState(false)
    const [name,setName] = useState(null)
    const [lastName,setLastName] = useState(null)
    const [age,setAge] = useState(null)
    const [birthday,setBirthday] = useState(null)
    useEffect( () => {
        fetch(`/users`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then((response) => response.json())
          .then((users) => {setUsers(users)})
          .then((a) => {setUsersNoAuth(null)})
          .catch((a) => {if(users.length == 0){
            fetch(`/users/all`)
            .then((response) => response.json())
            .then((users) => setUsersNoAuth(users));
          }})
          
    },[])
    
    const addNewUser = () => {
        if(name && lastName){
            fetch('/Add',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                First_Name: name,
                Last_Name: lastName,
                Age: age,
                Date_of_birth: birthday+""
            })
        })
        .then((response) => response.json())
        .then((newUser) => {if(newUser){setUsers([...users,newUser])}});
        }
        setAdd(false)
        setName(null)
        setLastName(null)
        setAge(null)
        setBirthday(null)
    }
    const listChanged = (users) =>{
        setUsers([])
        setUsers(users)
    }
    return (
        <div className="users-list">
            <div className="users">
            <h2>Users List</h2>
            <ul>
            {usersNoAuth && usersNoAuth.map((user,index)=>(<li key={index}>{user.First_Name} {user.Last_Name}</li>))}
            {users && users.map((user,index)=>(<User user={user} key={index} listChanged={(users)=>{listChanged(users)}}/>))}
            </ul>
            </div>
            {users.length != 0 ? 
            <div className="new-user">
                <button className="btn btn-dark btn-block" onClick={()=>(setAdd(!add))}><i className="fas fa-user-plus"></i> Add new user</button>
               {add && <div >
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputname" onChange={(e)=>{setName(e.target.value)}} placeholder="name"/>
                <label>First name</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputlast" onChange={(e)=>{setLastName(e.target.value)}} placeholder="lastname"/>
                <label>Last name</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputage" onChange={(e)=>{setAge(e.target.value)}} placeholder="age"/>
                <label>Age</label>
                </div>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputbirth" onChange={(e)=>{setBirthday(e.target.value)}} placeholder="birthday"/>
                <label>Birthday (YYYY-MM-DD)</label>
                </div>
                <button className="btn btn-dark btn-block" onClick={()=>(addNewUser())}>Submit Adding</button>
                </div>
            }
            </div> : null}
        </div>
    )
}

export default Users;