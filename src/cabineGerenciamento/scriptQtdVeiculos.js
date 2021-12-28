window.onload = async () => {
    fetch('http://localhost:3030/gerenciamento')
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('date').innerHTML = `${json[0][4]}`;
    });

    fetch('http://localhost:3030/quantidade')
    .then((response) => response.json())
    .then((json) => {
      document.getElementById('qtdVeiculos').innerHTML = `Quantidade de veículos: ${json[0]}`;
    })
};

