import React , {useState} from 'react'

function LoginPage() {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [allentry, setAllentry] = useState([]);


    const submitForm = (e) => {
        e.preventDefault();
     const newEntry = {username:username , password:password}
     setAllentry([...allentry, newEntry])
     console.log(allentry);
     console.log(newEntry);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <label htmlFor="usename" >UserName</label>
                 
                <input type="text" name="username" id="username" autoCorrect="off" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                
                <label htmlFor="password">PassWord</label>

                <input type="text" name="password" id="password" autoCorrect="off" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button>Login</button>
            </form>
            <div>
                {
                    allentry.map((curElem) => {
                        return (
                            <div>
                                <p>{curElem.username}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LoginPage
