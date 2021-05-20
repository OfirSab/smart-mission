import React,{useState} from 'react';

const User = ({user}) =>{
    const [edit,setEdit] = useState(false)
    const [displayName,setDisplayName] = useState(user.First_Name)
    const [displayLast,setDisplayLast] = useState(user.Last_Name)
    const [name,setName] = useState(user.First_Name)
    const [lastName,setlastName] = useState(user.Last_Name)

    const setChanges = ()=>{
        if(name != user.First_Name || lastName != user.Last_Name) {
            fetch('/SetChanges',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: user._id,
                    name: name,
                    lastName: lastName
                })
            })
            .then((response) => response.json())
            .then((users) => {if(users.message === 'success'){
                setDisplayName(name)
                setDisplayLast(lastName)
            }
            });
        }
        setEdit(false)
    }
    return (
        <div className="single-user">
            <li>{displayName} {displayLast}
            <button className="btn btn-light" onClick={()=>{setEdit(!edit)}}>Edit</button>
            {edit && 
            <div className="edit">
                <input placeholder={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <input placeholder={lastName} onChange={(e)=>{setlastName(e.target.value)}}></input>
                <button className="btn btn-info" onClick={()=>(setChanges())}>Set changes</button>
            </div>
            }
            </li>
        </div>
    )
}

export default User;