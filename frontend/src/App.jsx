import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BU from "./pages/BU";
import Finance from "./pages/Finance";
import Login from "./pages/Login"; // não esqueça de criar este arquivo conforme orientações anteriores

export default function App() {
  const [user, setUser] = useState(null);

  // Se não está logado, renderiza a tela de login e só
  if (!user) {
    return <Login onLogin={setUser} />;
  }

  // Se logado, mostra o app normal com menu e rotas
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Menu lateral */}
        <nav style={{ width: 200, background: "#abc", padding: 16, minHeight: "100vh" }}>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bu">Business Unit</Link></li>
            <li><Link to="/finance">Mapping</Link></li>
          </ul>
          <div style={{ marginTop: 30 }}>
            <span style={{ fontSize: 13, color: "#555" }}>
              Hi, {user}.<br />
              <button style={{ marginTop: 8 }} onClick={() => setUser(null)}>
                Sair
              </button>
            </span>
          </div>
        </nav>
        {/* Conteúdo da página */}
        <main style={{ flex: 1, padding: 16 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bu" element={<BU />} />
            <Route path="/finance" element={<Finance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}