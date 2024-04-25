import { useContext } from "react";
import { ColorContext } from "./Context";

export default function Header() {
  const color = useContext(ColorContext);
  return (
    <div>
      <h1>Hello world {color}</h1>
    </div>
  );
}
