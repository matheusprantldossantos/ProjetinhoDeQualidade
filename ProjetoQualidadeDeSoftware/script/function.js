//Comentários para poder subir o arquivo no GitHub
window.onload = function(){
    let artefato = undefined;
    let dre = undefined;
};
//Define o artefato o qual o usuário quer utilizar
function defineArtefato(){
    let art = window.document.getElementById("select-art");
    let retorno = art.options[art.selectedIndex].value;
    window.alert(retorno);
    artefato = String(retorno);
};
function defineDre(){
    let selectDre = window.document.getElementById("select-dre");
    let tipoDre = selectDre.options[selectDre.selectedIndex].value;
    window.alert(tipoDre);
    dre = String(tipoDre);
}
function adicionaInfo(){
    let tabela = window.document.getElementById("tabelaConteudo2");
    let conteudo = verificaDRE(dre, artefato);
    tabela.innerHTML = conteudo;

};
function verificaDRE(dre, artefact){
    String(dre);
    String(artefact);
    let retorno = "";
    if(artefact === "Interface"){
        switch(dre){
            case "DRE1":
                retorno += "<tr>";
                retorno += "<td>As interfaces internas e externas necessárias para o projeto são identificadas?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces estão acordates as necessidades do usuário?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As restrições relacionados ao cenário de negócio  exercem influência nas interfaces?</td>";
                retorno += "</tr>";
                break;
            case "DRE2":
                retorno += "<tr>";
                retorno += "<td>As interfaces utilizadas pelo sistema foram determinadas a partir da priorização da necessidade do cliente?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces priorizam as expectativas do cliente?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As restrições relacionados ao cenário de negócio  exercem influência nas interfaces?</td>";
                retorno += "</tr>";
                break;
            case "DRE3":
                retorno += "<tr>";
                retorno += "<td>Existe interface relacionada aos requisitos não funcionais do sistema?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Alguma interface desempenha o trabalho de uma funcionalidade operante do projeto?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe descrição dos papéis desempehados pelas interfaces no sistema?</td>";
                retorno += "</tr>";
                break;
            case "DRE4":
                retorno += "<tr>";
                retorno += "<td>Existe interfaces externas para os componestes do produto?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe interfaces internas para os componentes do produto?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe algum relacionamento entre as interfaces e os componentes de produto?</td>";
                retorno += "</tr>";
                break;
            case "DRE5":
                retorno += "<tr>";
                retorno += "<td>Foi realizado a descrição das funções das interfaces no sistema?</td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>Houve separação das interfaces, as quais, são acordantes com os cenários?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Conceitos operacionais e cenários de interface estão relacionados?</td>";
                retorno += "</tr>";
                break;
            case "DRE6":
                retorno += "<tr>";
                retorno += "<td>Houve uma análise sobre o papel das interfaces no sistema?</td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>Os critérios de interface foram definidos?</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As necessidades de interfaces estão sendo balanceadas?</td>";
                retorno += "</tr>";
                break;
            case "DRE7":
                retorno += "<tr>";
                retorno += "<td>Os requisitos de interface estão validados?</td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>As especificações de validação de interface foram priorizadas? </td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As especificações de validação de interface foram implantadas?</td>";
                retorno += "</tr>";
                break;
        }
    }
    else if(artefato === "Product Backlog"){

    }
    return retorno;   
};