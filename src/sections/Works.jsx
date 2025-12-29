import SecTitle from "@/components/ui/SecTitle";
import Section from "@/components/layout/Section";
import { projects } from "@/data/WorksData";
import styles from "./Works.module.scss";

function Works() {
  return (
    <Section id="works">
      <SecTitle
        icon="👩‍💻"
        title="Works"
        desc={
          "웹 퍼블리셔로 참여했던 실무 프로젝트들입니다.\n※ 일부 사이트는 업체 사정으로 리뉴얼되어, 작업 당시 화면과는 다를 수 있습니다."
        }
      />

      <div className={styles.cardWrap}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={styles.thumb}
              >
                <img src={p.img} alt={p.title} />
              </a>
            ) : (
              <div className={styles.thumb}>
                <img src={p.img} alt={p.title} />
              </div>
            )}

            <div className={styles.box}>
              <div className={styles.meta}>
                <span className={styles.device}>{p.device}</span>
                {p.role && <span className={styles.role}>{p.role}</span>}
              </div>

              <h3>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Works;
