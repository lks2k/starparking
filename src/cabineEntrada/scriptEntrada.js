const submitPlaca = async () => {

    const placa = document.getElementById('inputPlaca').value;
    await axios.post('http://localhost:3030/placa', {
      placa: placa
    })
    
      window.location.href = "../../src/cabineEntrada/ticket.html"
}

