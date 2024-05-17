import { useState, useEffect, forwardRef } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log("1010");
  }, [search, onSearch]);

  function handleChange(evento) {
    setSearch(evento.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(search);
    }
  }

  return (
    <div ref={ref}>
      <p>Mi Boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={search}
      ></input>
    </div>
  );
});
export default Navbar;
