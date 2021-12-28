window.onload = async () => {
    fetch('http://localhost:3030/gerenciamento')
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('id1').innerHTML = `${json[0][0]}`;
        document.getElementById('id2').innerHTML = `${json[1][0]}`;
        document.getElementById('id3').innerHTML = `${json[2][0]}`;
        document.getElementById('id4').innerHTML = `${json[3][0]}`;
        document.getElementById('id5').innerHTML = `${json[4][0]}`;


        document.getElementById('date1').innerHTML = `${json[0][1]}`;
        document.getElementById('date2').innerHTML = `${json[1][1]}`;
        document.getElementById('date3').innerHTML = `${json[2][1]}`;
        document.getElementById('date4').innerHTML = `${json[3][1]}`;
        document.getElementById('date5').innerHTML = `${json[4][1]}`;
    });
};