import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luana"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, tempore. A, consectetur accusantium. Aliquam fugit dolorem odit perferendis facere qui. Quia assumenda natus quidem consectetur facilis eum magnam voluptas consequatur?"
          />

          <Post author="Esther Gomes" content="Esposa da autora 1" />
        </main>
      </div>
    </div>
  );
}
