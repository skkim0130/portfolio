import React from "react";

function SecTitle({ icon, title, desc }) {
  return (
    <div className="secTitle">
      <h2>
        <i>{icon}</i> <span>{title}</span>
      </h2>
      {desc && <p className="secTxt">{desc}</p>}
    </div>
  );
}

export default SecTitle;
