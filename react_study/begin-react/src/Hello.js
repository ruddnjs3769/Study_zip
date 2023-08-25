import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      하이요 {name}
    </div>
  );
}
Hello.defaultProps = {
  name: "noName",
};

export default Hello;
