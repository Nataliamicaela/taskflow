import { useState } from "react";
import type { FormEvent } from "react";
import { registerUser } from "../../services/auth/authService";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await registerUser(email, password);

            setMessage("✅ Usuario creado correctamente");

            setEmail("");
            setPassword("");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h1>Registro</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Registrarse
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;