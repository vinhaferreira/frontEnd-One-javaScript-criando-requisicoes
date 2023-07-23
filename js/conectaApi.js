async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}
export const conectaApi = {
  listaVideos,
};

// //requisicao GET so quer receber os valores, por enquanto quer fazer nada
