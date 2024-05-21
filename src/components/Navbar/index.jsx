import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";

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
    <div ref={ref} style={{ marginBottom: 14, width: "100%", display: "flex" }}>
      <div style={{ flex: 1, display: "flex" }}>
        <p style={{ fontSize: 24, fontWeight: "bold" }}>Mi Boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: "4",
            border: "none",
            width: 200,
          }}
        ></input>
        {/* Para solicitar acceso a my perfil */}
        <Link
          to={"/profile/my-info"}
          style={{ marginLeft: "24px", color: "white", textDecoration: "none" }}
        >
          My Profile
        </Link>
      </div>
    </div>
  );
});
export default Navbar;
