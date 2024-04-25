import { useState } from "react";

export default function Show() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      {display && <h1>Header present</h1>}
      <button
        role="button"
        onClick={() => setDisplay((prevState) => !prevState)}
      >
        Click
      </button>
    </div>
  );
}
