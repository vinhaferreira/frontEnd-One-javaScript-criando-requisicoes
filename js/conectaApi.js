async function listaVideos() {
  const conexao = await fetch("http://localhost:3000");
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
}
listaVideos();
//requisicao GET so quer receber os valores, por enquanto quer fazer nada
