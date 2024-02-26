
const Home = (props: {name: string}) => {

    

    return(
        <h1>{props.name ? 'Hello ' + props.name : 'You are not logged in'}</h1>
    )
}

export default Home