import React from "react";
import "./index.css";

const MeuComponente = () => {
  return (
    <div className="meu-componente">
      {}
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#meu-plano">Meu Plano</a></li>
            <li><a href="#historico">Histórico</a></li>
          </ul>
        </nav>
      </header>

      {}
      
      <main className="content">
        <h1>Meu plano</h1>
        <div className="box">
        <h2 className="corrida">Corrida</h2>
        <p>
          Corrida leve de 30 minutos
          <br /> 
          Duração: 30 minutos
        </p>
        <button className="botoes">Ver detalhes</button><br/><br/>
        <button className="botoes">Remover</button>
        </div>

        <div className="box">
        <h3 className="yoga">Yoga</h3>
        <p>
          Sessão de Yoga de 45 minutos
          <br /> 
          Duração: 45 minutos
        </p>
        <button className="botoes">Ver detalhes</button> <br/> <br />
        <button className="botoes">Remover</button>
        </div>
      </main>
      </div>
    
  );
};

export default MeuComponente;
