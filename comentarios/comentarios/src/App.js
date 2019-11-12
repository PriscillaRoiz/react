import React from 'react';
import './App.css';   
import Comentario from './componentes/Comentario'


function App() {
  return (
    <div className="App">

        <h2>Rede Gato</h2>

      <Comentario
        img= "https://cdn.e-konomista.pt/uploads/2019/07/sunny-cat_1502711630-425x318.jpg"
        nome="Gato01"
        subtitulo="titulo"
        comentario="O React é uma biblioteca JavaScript declarativa, eficiente 
        e flexível para criar interfaces com o usuário. Ele permite compor UIs 
        complexas a partir de pequenos e isolados códigos chamados “componentes”."
      />

      <Comentario
      img = "https://cdn1.newsplex.pt/fotos/2017/8/8/598375.jpg?type=Artigo"
     nome="Gato02"
     subtitulo="titulo"
     comentario="O React é uma biblioteca JavaScript declarativa, eficiente 
     e flexível para criar interfaces com o usuário. Ele permite compor UIs 
     complexas a partir de pequenos e isolados códigos chamados “componentes”."      />

    </div>
  );
}
export default App;
