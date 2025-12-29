import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Gnb from "./Gnb";

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <h1 className="logo">KSK Portfolio</h1>

      <button
        type="button"
        className="btn-menu"
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <MdMenu size={30} />
      </button>

      <Gnb closeMenu={closeMenu} open={open} />
    </header>
  );
}

export default Header;
