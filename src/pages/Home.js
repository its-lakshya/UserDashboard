import useFetch from "../hooks/useFetch";

const Home = () => {

    const data = useFetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
    console.log(data);
    return (
        <div>
            
        </div>
    )
}

export default Home;