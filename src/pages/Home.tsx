
const Home = (props: {name: string}) => {

    console.log(props.name)

    return(
        <h1>{props.name ? 'Hello ' + props.name : 'You are not logged in'}</h1>
    )
}

export default Home