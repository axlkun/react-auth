import { SyntheticEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectPage, setRedirectPage] = useState(false);
    const navigate = useNavigate();

    const loginEndpoint = 'http://localhost:8000/api/login';

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch(loginEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        props.setName(content.name);

        setRedirectPage(true);
    }

    useEffect(() => {
        if (redirectPage) {
            navigate('/');
        }
    }, [redirectPage, navigate]);

    return (
        <form onSubmit={submit}>
            <div>
                <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login
