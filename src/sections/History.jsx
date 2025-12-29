import SecTitle from "@/components/ui/SecTitle";
import Section from "@/components/layout/Section";
import { history } from "@/data/HistoryData";
import styles from "./History.module.scss";

function History() {
  return (
    <Section id="history">
      <SecTitle
        icon="🗓️"
        title="History"
        desc="실무 현장에서 쌓아온 저의 근무 이력입니다."
      />
      <ul className={styles.timeline}>
        {history.map((h, idx) => (
          <li key={idx} className={styles.item}>
            <div className={styles.year}>
              <p className={styles.txt}>{h.year}</p>
              <p className={styles.txtS}>{h.period}</p>
            </div>
            <div className={styles.content}>
              <h3 className={styles.company}>
                {h.company}
                <span className="tag">{h.type}</span>
              </h3>
              <p className={styles.team}>{h.team}</p>
              <p className={styles.part}>{h.part}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default History;
