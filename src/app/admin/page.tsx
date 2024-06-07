

import Image from "next/image";
import styles from "./page.module.css";
import { UsersList } from "./components/UsersList";
import { AdminHeader } from "./components/Header";

export default function AdminPage() {
  return (
    <main className={styles.main}>
      <AdminHeader />
      <UsersList></UsersList>
    </main>
  );
}
