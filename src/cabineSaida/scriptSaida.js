const API_URL = ('http://localhost:3030/')

window.onload = async () => {
    fetch(`${API_URL}ticket`)
    .then((response) => response.json())
    .then((json) => {
      document.getElementById('id1').innerHTML = `${json[1][0]}`;
      document.getElementById('id2').innerHTML = `${json[2][0]}`;
      document.getElementById('id3').innerHTML = `${json[3][0]}`;
      document.getElementById('id4').innerHTML = `${json[4][0]}`;
      document.getElementById('id5').innerHTML = `${json[5][0]}`;
      document.getElementById('id6').innerHTML = `${json[6][0]}`;
      document.getElementById('id7').innerHTML = `${json[7][0]}`;
  
      document.getElementById('cond1').innerHTML = `${json[1][1]}`;
      document.getElementById('cond2').innerHTML = `${json[2][1]}`;
      document.getElementById('cond3').innerHTML = `${json[3][1]}`;
      document.getElementById('cond4').innerHTML = `${json[4][1]}`;
      document.getElementById('cond5').innerHTML = `${json[5][1]}`;
      document.getElementById('cond6').innerHTML = `${json[6][1]}`;
      document.getElementById('cond7').innerHTML = `${json[7][1]}`;
  
    });
};

const saida = async () => {
  const id = document.getElementById('inputSaida').value;
  await axios.get(`${API_URL}saida?ticket_id=${id}`).then(() => {
    alert("Cancela liberada, volte sempre!")
  }).catch(() => {
    alert("Ticket negado, pague no caixa mais próximo.")
  })

};
