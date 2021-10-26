import { Routes } from "./routes";
import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <Routes />
    </main>
  );
}
