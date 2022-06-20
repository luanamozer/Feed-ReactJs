import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimeline}>
              <strong>Diego Fernandes</strong>
              <time
                title="20 de Junho,2022 ás 11:11h"
                dataTime="2022-06-20 ás 11:11:33"
              >
                Cerca de 2hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p> Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
