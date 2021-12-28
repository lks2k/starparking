const API_URL = 'http://localhost:3030/';
let data;

window.onload = async () => {
  const queryString = window.location.search;
  const parametro = new URLSearchParams(queryString);
  const id = parametro.get('ticket_id');

   await axios.get(id ? `${API_URL}?ticket_id=${id}` : API_URL)
   .then((response) => {
    const json = response.data;
    data = json;
    document.getElementById('ticket').innerHTML = `Ticket: ${json[0][0]}`;
    document.getElementById('placa').innerHTML = `Placa: ${json[0][1]}`;
    document.getElementById('entrada').innerHTML = `Horário de Entrada: ${json[0][3]}`;
    document.getElementById('saida').innerHTML = `Horário de Saída: ${json[0][4] === null ? 'N/A' : json[0][4]}`;
    document.getElementById('tarifa').innerHTML = `Tarifa: ${json[0][2]},00`;
   }).catch(() => {
     alert("Ticket não encontrado.");
   })

};

const pagar = async () => {
  const id = data[0][0];
  await axios.post(`${API_URL}pagar?ticket_id=${id}`).then(() => {
    alert("Pagamento efetuado.")
  }).catch(() => {
    alert("Pagamento não efetuado.")
  })
};

