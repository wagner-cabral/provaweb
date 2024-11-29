import React from "react";
import "./home.css";
<home className="css"></home>;

const MeuComponente = () => {
  return (
    <div className="meu-componente">
      {}
      <header class="header">
    <div class="container">
        <div class="logo">My Finance</div>
        
        <nav class="navigation">
            <ul class="nav-list">
                <li><a href="#link1">Home</a></li>
                <li><a href="#link2">Transações</a></li>
                
            </ul>
        </nav>
    </div>
</header>
<h1>Transações</h1>
      {} 
      <main className="content">
        
        <div className="body">
       
        <p>
          Total Entradas: 6350
          <br /> <br />
          Total Saídas: 4140
        </p>
        <p>
            Saldo Atual: 2210
        </p>
       
        </div>
      </main>

      <footer className="rodape">
        Desenvolvido por Wagner Cabral
      </footer>
      </div>
      
    
  );
};

export default Home;
