import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/58042343?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Luana Mozzer</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time
          title="20 de Junho,2022 ás 11:11h"
          dataTime="2022-06-20 ás 11:11:33"
        >
          Publicado há 1h
        </time>

        <div className={styles.content}>
          <p> Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉
            <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#"> #novoprojeto #nlw #rocketseat</a>
          </p>
        </div>
      </header>
    </article>
  );
}
