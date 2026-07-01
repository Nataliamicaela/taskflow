import { useAuth } from "../../context/AuthContext";

const Home = () => {
    const { user, loading } = useAuth();

    console.log(user);

    console.log(loading);

    return (
        <h1>Home</h1>
    );
};

export default Home;