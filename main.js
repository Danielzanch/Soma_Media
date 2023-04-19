const form = document.getElementById('form-atividade');
const img_Aprovado = '<img src="./imagens/festejando.png" alt="Emoji celebrando" />';
const img_Reprovado = '<img src="./imagens/triste.png" alt="Emoji triste" />';
const Atividades = [];
const Notas = [];
const span_aprovado = '<span class="resultado aprovado">Aprovado</span>';
const span_reprovado = '<span class="resultado reprovado">Reprovado</span>';
const nota_minima = parseFloat(prompt('Digite a nota minima: '));

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionar_linha();
    atualizar_tabela();
    Atualiza_media_final();
});

function adicionar_linha() { /* cria uma função chamada adicionar linha, esta função cria a linha */
    const input_nome_atividade = document.getElementById('nome-atividade');
    const input_nota_atividade = document.getElementById('nota-atividade');

    if (Atividades.includes(input_nome_atividade.value)) {
        alert(`A atividade: ${input_nome_atividade.value} já foi inserida!`)
    }
    else {
        Atividades.push(input_nome_atividade.value); /* adiciona as informações que foram digitados no campo atividade e salva na array */
        Notas.push(parseFloat(input_nota_atividade.value)); /* adiciona as informações que foram digitado no campo nota no arrey, o parseFloat transforma todo os numero da array em numero */

        let linha = '<tr>';
        linha += `<td>${input_nome_atividade.value}</td>`; /* adiciona mais uma linha */
        linha += `<td>${input_nota_atividade.value}</td>`;  /* adiciona mais uma linha */
        linha += `<td>${input_nota_atividade.value >= nota_minima ? img_Aprovado : img_Reprovado}</td>`; /* operador ternario */
        linha += `</tr>`;

        linhas += linha;
    }
    
    input_nome_atividade.value = '';
    input_nota_atividade.value = '';
}

function atualizar_tabela() {
    const corpo_tabela = document.querySelector('tbody');
    corpo_tabela.innerHTML = linhas;
}

function Atualiza_media_final() {
    const media_final = calcula_media_final();
    document.getElementById('media_final_valor'). innerHTML = media_final.toFixed(1);/* toFixed serve para limitar quntos numeros aparecerao depois da vircula. */
    document.getElementById('media_final_resultado').innerHTML = media_final >= nota_minima ? span_aprovado : span_reprovado;
}

function calcula_media_final() {
    let SomaDasNotas = 0;
    
    for (let i = 0; i < Notas.length; i++) {
        SomaDasNotas += Notas[i];
    }

    return SomaDasNotas / Notas.length;
}