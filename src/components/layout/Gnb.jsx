import { MdClear } from "react-icons/md";
import { gnbMenu } from "../../data/HeaderData";

function Gnb({ open, closeMenu }) {
  return (
    <>
      <aside className={`aside ${open ? "open" : ""}`}>
        <button
          type="button"
          className="btn-close"
          onClick={closeMenu}
          aria-label="사이드 내비게이션 닫기"
        >
          <MdClear size={30} />
        </button>

        <ul>
          {gnbMenu?.map((item, idx) => (
            <li key={idx}>
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {open && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Gnb;
