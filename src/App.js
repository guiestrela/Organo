import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="cargo"placeholder="Digite o seu cargo"/>
      <CampoTexto label="imagem"placeholder="Informe o endereço da imagem"/>
      </div>
  );
}

export default App;
