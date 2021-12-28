window.onload = async () => {
    fetch('http://localhost:3030/gerenciamento')
    .then((response) => response.json())
    .then((json) => {
        console
        document.getElementById('placa1').innerHTML = `${json[0][2]}`;
        document.getElementById('placa2').innerHTML = `${json[1][2]}`;
        document.getElementById('placa3').innerHTML = `${json[2][2]}`;
        document.getElementById('placa4').innerHTML = `${json[3][2]}`;
        document.getElementById('placa5').innerHTML = `${json[4][2]}`;


        document.getElementById('date1').innerHTML = `${json[0][1]}`;
        document.getElementById('date2').innerHTML = `${json[1][1]}`;
        document.getElementById('date3').innerHTML = `${json[2][1]}`;
        document.getElementById('date4').innerHTML = `${json[3][1]}`;
        document.getElementById('date5').innerHTML = `${json[4][1]}`;
    });
};