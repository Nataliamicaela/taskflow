import { useAuth } from "../../context/AuthContext";

const Tasks = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    return (
        <div>
            <h1>Mis tareas</h1>

            <p>
                ¡Bienvenida {user?.email}! 👋
            </p>
        </div>
    );
};

export default Tasks;