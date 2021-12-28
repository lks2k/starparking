const searchTicket = async () => {
    const id = document.getElementById('searchInput').value;


    window.location.href = `../../src/cabinePagamento/tarifa.html?ticket_id=${id}`;
};
