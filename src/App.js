import React from "react";

/**Importando Rotas */
import Routes from "./Routes";

/**importando estilos globais */
import GlobalStyle from "./style";

/** importando Provider*/
import NexassProvider from "./Context";

function App() {
  return (
    <NexassProvider>
      <GlobalStyle />
      <Routes />
    </NexassProvider>
  );
}

export default App;
