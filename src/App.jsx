import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
//App é o arquivo principal, onde vamos juntar os componentes
//<> fragmento </>  Usamos o Fragmento pois a função não permite que os objetos fiquem soltos
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  )
}
export default App;