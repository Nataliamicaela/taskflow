import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import { createTask } from "../../services/firestore/firestoreService";

const Tasks = () => {
    const { user, loading } = useAuth();

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [message, setMessage] = useState("");

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!user) return;

        try {
            await createTask(
                title,
                description,
                user.uid
            );

            setMessage("✅ Tarea creada correctamente");

            setTitle("");
            setDescription("");
        } catch (error) {
            console.error(error);

            setMessage("Ocurrió un error");
        }
    };

    return (
        <div>
            <h1>Mis tareas</h1>

            <p>
                Bienvenida {user?.email}
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <br />
                <br />

                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

                <br />
                <br />

                <button type="submit">
                    Crear tarea
                </button>
            </form>

            <p>{message}</p>
        </div>
    );
};

export default Tasks;