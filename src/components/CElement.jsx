import { useContext } from "react";
import { UserContext } from "./Context";

export default function Celement() {
  const name = useContext(UserContext);

  return (
    <div>
      <h2>Hello small world {name}</h2>
      <h3>Hello smallest world</h3>
    </div>
  );
}
