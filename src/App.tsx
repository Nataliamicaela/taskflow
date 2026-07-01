import "./styles/global.css";
import { auth } from "./services/firebase/firebase";

console.log("Firebase conectado:", auth);

import AppRouter from "./routes/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;