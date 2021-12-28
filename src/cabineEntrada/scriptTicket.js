window.onload = async () => {
    fetch('http://localhost:3030/')
    .then((response) => response.json())
    .then((json) => {
      document.getElementById('ticket').innerHTML = `Ticket: ${json[0][0]}`;
      document.getElementById('placa').innerHTML = `Placa: ${json[0][1]}`;
      document.getElementById('entrada').innerHTML = `Horário de Entrada: ${json[0][3]}`;
    });
}
