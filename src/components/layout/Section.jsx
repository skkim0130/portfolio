import React from "react";
import classNames from "classnames";

function Section({ id, children, className }) {
  return (
    <>
      <section id={id} className="sec">
        <div className={classNames("inner", className)}>{children}</div>
      </section>
    </>
  );
}

export default Section;
