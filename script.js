const buttons = document.querySelectorAll('button');
const programacao = document.getElementById('programacao');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado','Domingo'];
        programacao.innerHTML = `<h2>${dias[index]}</h2>`;
        switch (index) {
            case 0:
                programacao.innerHTML += `
                                        <p>9:30 - Acordar e tomar cafe</p>
                                        <p>10:30 - Estudar</p>
                                        <p>11:30 - Se arrumar para o trabalho</p>
                                        <p>12:30 - Primeiro onibus</p>
                                        <p>13:05 - Segundo onibus</p>
                                        <p>14:00 - Trabalho</p>
                                        <p>22:00 - Ir para casa</p>`
                break;
            case 1:
                programacao.innerHTML += `<p> FOLGA</p>
                                        <p>7:00 - Acordar e se arrumar</p>
                                        <p>8:00 - Pegar carona com Aline</p>
                                        <p>9:00 - Faculdade</p>
                                        <p>11:40 - Fim da aula/Pegar onibus</p>
                                        <p>13:00 - Lavar cabelo/Arrumar o quarto e estudar</p>`;
                break;
            case 2:
                programacao.innerHTML += `<p>7:00 - Acordar e se arrumar</p>
                                        <p>8:00 - Pegar carona com Aline</p>
                                        <p>9:00 - Faculdade</p>
                                        <p>11:40 - Fim da aula/Estudar</p>
                                        <p>13:00 - pegar onibus</p>
                                        <p>14:00 - Trabalhar</p>
                                        <p>22:00 - Ir para casa</p>`;
                break;
            case 3:
                programacao.innerHTML += `<p>7:00 - Acordar e se arrumar</p>
                                        <p>8:00 - Pegar carona com Aline</p>
                                        <p>9:00 - Faculdade</p>
                                        <p>11:40 - Fim da aula/Estudar</p>
                                        <p>13:00 - pegar onibus</p>
                                        <p>14:00 - Trabalhar</p>
                                        <p>22:00 - Ir para casa</p>`;
                break;
            case 4:
                programacao.innerHTML += `
                                        <p>9:30 - Acordar e tomar cafe</p>
                                        <p>10:30 - Estudar</p>
                                        <p>11:30 - Se arrumar para o trabalho</p>
                                        <p>12:30 - Primeiro onibus</p>
                                        <p>13:05 - Segundo onibus</p>
                                        <p>14:00 - Trabalho</p>
                                        <p>22:00 - Ir para casa</p>`
                break;
             case 5:
                    programacao.innerHTML += `
                                            <p>9:30 - Café</p>
                                            <p>10:20 - Estudar</p>
                                            <p>11:00 - Banho</p>
                                            <p>12:20 - onibus</p>
                                            <p>13:00 - Trabalho</p>
                                            <p>22:00 - Ir para casa</p>`;
                break;
            case 6:
                    programacao.innerHTML += `<p>SEM HORARIO FIXO</p>`;
                break;
        }
    });
});
