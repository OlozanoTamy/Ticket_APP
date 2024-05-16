import { useState } from "react";
function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleChange(evento) {
    setSearch(evento.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(search);
    }
  }
  return (
    <>
      <p>Mi Boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={search}
      ></input>
    </>
  );
}

export default Navbar;
