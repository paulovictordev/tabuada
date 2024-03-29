function calculaTabuada() {
    let tabuada = document.querySelector('#tabuada tbody');
    let valor = parseInt(document.querySelector('#valor').value);

    tabuada.innerHTML = '';

    for (let valorB = 0; valorB <= 10; valorB++) {
        let resultado = valor * valorB;

        let template = `
        <td>${valor}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
    `;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.append(tr);
    }
}

calculaTabuada();

document.querySelector('#valor').addEventListener('change', calculaTabuada);