import SecTitle from "@/components/ui/SecTitle";
import Section from "@/components/layout/Section";
import { skillGroups } from "@/data/SkillsData";
import styles from "./Skills.module.scss";

function Skills() {
  return (
    <Section id="skills">
      <SecTitle icon="🛠️" title="Skills" desc="제가 다루는 주요 기술 스택입니다." />
      <div className={styles.listWrap}>
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div key={category} className={styles.group}>
            <h3 className={styles.groupTitle}>{category}</h3>
            <ul className={styles.list}>
              {skills.map((skill, idx) => (
                <li key={idx} className={styles.item}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
