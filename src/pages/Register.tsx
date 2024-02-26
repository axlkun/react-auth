import { SyntheticEvent, useState, useEffect } from "react"
import { useNavigate  } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectPage, setRedirectPage] = useState(false);
    const navigate = useNavigate();

    const registerEndpoint = 'http://127.0.0.1:8000/api/register';

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch(registerEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });


        setRedirectPage(true);

    }

    useEffect(() => {
        if (redirectPage) {
            navigate('/login');
        }
    }, [redirectPage, navigate]);

    return (
        <form>
            <div>
                <h1 className='h3 mb-3 fw-normal'>Please register</h1>
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" id="exampleInputName" aria-describedby="nameHelp" onChange={e => setName(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
        </form>
    )
}

export default Register
