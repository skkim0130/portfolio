import profile from "/images/profile_emoji.png";
import { RiNotionFill } from "react-icons/ri";
import Section from "@/components/layout/Section";
import { IntroGroup } from "@/data/IntroData";
import styles from "./Intro.module.scss";

function Intro() {
  return (
    <Section id="intro" className={styles.inner}>
      <div className={styles.imgBox}>
        <img src={profile} alt="프로필 사진" />
      </div>
      <div className={styles.txtBox}>
        <h2 className={styles.name}>SunKyung Kim</h2>
        <p className={styles.role}>
          컴포넌트 단위 마크업 구조를 고려하는 웹 퍼블리셔
        </p>
        <div className={styles.desc}>
          <p>
            10년간 웹 퍼블리싱 구축부터 유지보수까지 전반적인 실무를
            담당해왔습니다.
          </p>
          <p>
            React와 JavaScript 환경을 학습하며, 컴포넌트 단위 마크업 구조에 대한
            이해를 넓히고 있습니다.
          </p>
          <p>협업과 유지보수를 고려한 구조적인 퍼블리싱을 지향합니다.</p>
        </div>
        <ul className={styles.list}>
          {IntroGroup.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank">
                <RiNotionFill size={20} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Intro;
