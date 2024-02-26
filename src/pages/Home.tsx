import { useEffect } from "react"

const Home = () => {

    const userEndpoint = 'http://localhost:8000/api/user';

    useEffect(() => {
        (
            async () => {
                await fetch(userEndpoint, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });
            }
        )();
    },[]);

    return(
        <h1>Home</h1>
    )
}

export default Home