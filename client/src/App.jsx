import { AuthProvider } from "./contexts/auth";
import { Routes } from "./routes";

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
