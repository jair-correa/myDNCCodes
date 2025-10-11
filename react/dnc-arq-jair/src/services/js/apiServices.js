//criado para fazer chamadas a API
//CRIA FUNCAO PRA FAZER REQUISICOES GET NA API
//fetch API - metodo nativo do JS para fazer requisicoes HTTP
//fetch retorna uma promise - objeto que representa a finalizacao ou falha de uma operacao assincrona
//async/await - sintaxe mais moderna para lidar com promises

// eslint-disable-next-line no-unused-vars
export const getApiData = async (endpoint, params) => {
  try {
    const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);
    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      console.error(`Network response was not ${response.status}`);
    }
    const data = await response.json(); //Metodo para extrair obter dados em json
    return data;
  } catch (e) {
    console.error('Catch error: ', e);
  }
};
