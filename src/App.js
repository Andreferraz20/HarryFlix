import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.teste[0].titulo}
        url={dadosIniciais.teste[0].url}
        videoDescription={"Os melhores momentos de cada filme"}
        backgroundimage={dadosIniciais.teste[0].image}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      />

      <Carousel 
        category={dadosIniciais.categorias[6]}
      />

      <Footer />

    </div>
  );
}

export default App;