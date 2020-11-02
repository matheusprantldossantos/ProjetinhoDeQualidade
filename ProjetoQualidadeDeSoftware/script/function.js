//Comentários para poder subir o arquivo no GitHub
window.onload = function(){
    let artefato = undefined;
    let dre = undefined;

    let totPositivoPB = 21;
    let totQntPB = 21;
    let porcentPB = Number.parseInt((totPositivoPB * 100) / totQntPB);
    

    let totPositivoArt = 21;
    let totQntArt = 21;
    let porcentArt = Number.parseInt((totPositivoArt * 100) / totQntArt);
};  
//Define o artefato o qual o usuário quer utilizar
function defineArtefato(){
    let art = window.document.getElementById("select-art");
    let retorno = art.options[art.selectedIndex].value;
    artefato = String(retorno);
};
function defineDre(){
    let selectDre = window.document.getElementById("select-dre");
    let tipoDre = selectDre.options[selectDre.selectedIndex].value;
    dre = String(tipoDre);
};
function adicionaInfo(){
    let tabela = window.document.getElementById("tabelaConteudo2");
    let conteudo = verificaDRE(dre, artefato);
    tabela.innerHTML = conteudo;

};
function contabilizar(id, name){
    let resultado = window.document.getElementById(id);
    let nome = name;
    alert(nome);
    let valor = String(resultado.value);
    if(valor == 'sim'){
        let a = 0;
    }
    else if(valor == 'nao'){
        totPositivoPB--;
    }
    else if(valor == 'NA'){
        totPositivoPB--;
        totQntPB--;
    }
    else{
        let b = 0;
    }
}
function verificaDRE(dre, artefact){
    String(dre);
    String(artefact);
    let retorno = "";

    if(artefact === "Interface"){
        switch(dre){
            case "DRE1":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces internas e externas necessárias para o projeto são identificadas?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_1' value='sim' onclick='contabilizar(\"btnCheckDre1_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_2' value='nao' onclick='contabilizar(\"btnCheckDre1_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_3' value='NA' onclick='contabilizar(\"btnCheckDre1_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces estão acordates as necessidades do usuário?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_4' value='sim' onclick='contabilizar(\"btnCheckDre1_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_5' value='nao' onclick='contabilizar(\"btnCheckDre1_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_6' value='NA' onclick='contabilizar(\"btnCheckDre1_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As restrições relacionados ao cenário de negócio  exercem influência nas interfaces?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_7' value='sim' onclick='contabilizar(\"btnCheckDre1_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_8' value='nao' onclick='contabilizar(\"btnCheckDre1_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre1_9' value='NA' onclick='contabilizar(\"btnCheckDre1_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE2":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces utilizadas pelo sistema foram determinadas a partir da priorização da necessidade do cliente?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_1' value='sim' onclick='contabilizar(\"btnCheckDre2_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_2' value='nao' onclick='contabilizar(\"btnCheckDre2_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_3' value='NA' onclick='contabilizar(\"btnCheckDre2_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces priorizam as expectativas do cliente?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_4' value='sim' onclick='contabilizar(\"btnCheckDre2_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_5' value='nao' onclick='contabilizar(\"btnCheckDre2_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_6' value='NA' onclick='contabilizar(\"btnCheckDre2_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As restrições relacionados ao cenário de negócio  exercem influência nas interfaces?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_7' value='sim' onclick='contabilizar(\"btnCheckDre2_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_8' value='nao' onclick='contabilizar(\"btnCheckDre2_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre2_9' value='NA' onclick='contabilizar(\"btnCheckDre2_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE3":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe interface relacionada aos requisitos não funcionais do sistema?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_1' value='sim' onclick='contabilizar(\"btnCheckDre3_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_2' value='nao' onclick='contabilizar(\"btnCheckDre3_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_3' value='NA' onclick='contabilizar(\"btnCheckDre3_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Alguma interface desempenha o trabalho de uma funcionalidade operante do projeto?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_4' value='sim' onclick='contabilizar(\"btnCheckDre3_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_5' value='nao' onclick='contabilizar(\"btnCheckDre3_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_6' value='NA' onclick='contabilizar(\"btnCheckDre3_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe descrição dos papéis desempehados pelas interfaces no sistema?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_7' value='sim' onclick='contabilizar(\"btnCheckDre3_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_8' value='nao' onclick='contabilizar(\"btnCheckDre3_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre3_9' value='NA' onclick='contabilizar(\"btnCheckDre3_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE4":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe interfaces externas para os componestes do produto?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_1' value='sim' onclick='contabilizar(\"btnCheckDre4_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_2' value='nao' onclick='contabilizar(\"btnCheckDre4_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_3' value='NA' onclick='contabilizar(\"btnCheckDre4_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe interfaces internas para os componentes do produto?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_4' value='sim' onclick='contabilizar(\"btnCheckDre4_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_5' value='nao' onclick='contabilizar(\"btnCheckDre4_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_6' value='NA' onclick='contabilizar(\"btnCheckDre4_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe algum relacionamento entre as interfaces e os componentes de produto?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_7' value='sim' onclick='contabilizar(\"btnCheckDre4_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_8' value='nao' onclick='contabilizar(\"btnCheckDre4_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre4_9' value='NA' onclick='contabilizar(\"btnCheckDre4_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE5":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Foi realizado a descrição das funções das interfaces no sistema?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_1' value='sim' onclick='contabilizar(\"btnCheckDre5_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_2' value='nao' onclick='contabilizar(\"btnCheckDre5_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_3' value='NA' onclick='contabilizar(\"btnCheckDre5_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>Houve separação das interfaces, as quais, são acordantes com os cenários?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_4' value='sim' onclick='contabilizar(\"btnCheckDre5_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_5' value='nao' onclick='contabilizar(\"btnCheckDre5_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_6' value='NA' onclick='contabilizar(\"btnCheckDre5_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Conceitos operacionais e cenários de interface estão relacionados?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_7' value='sim' onclick='contabilizar(\"btnCheckDre5_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_8' value='nao' onclick='contabilizar(\"btnCheckDre5_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre5_9' value='NA' onclick='contabilizar(\"btnCheckDre5_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE6":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Houve uma análise sobre o papel das interfaces no sistema?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_1' value='sim' onclick='contabilizar(\"btnCheckDre6_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_2' value='nao' onclick='contabilizar(\"btnCheckDre6_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_3' value='NA' onclick='contabilizar(\"btnCheckDre6_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>Os critérios de interface foram definidos?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_4' value='sim' onclick='contabilizar(\"btnCheckDre6_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_5' value='nao' onclick='contabilizar(\"btnCheckDre6_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_6' value='NA' onclick='contabilizar(\"btnCheckDre6_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As necessidades de interfaces estão sendo balanceadas?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_7' value='sim' onclick='contabilizar(\"btnCheckDre6_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_8' value='nao' onclick='contabilizar(\"btnCheckDre6_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre6_9' value='NA' onclick='contabilizar(\"btnCheckDre6_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE7":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Os requisitos de interface estão validados?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_1' value='sim' onclick='contabilizar(\"btnCheckDre7_1\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_2' value='nao' onclick='contabilizar(\"btnCheckDre7_2\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_3' value='NA' onclick='contabilizar(\"btnCheckDre7_3\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>As especificações de validação de interface foram priorizadas? </td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_4' value='sim' onclick='contabilizar(\"btnCheckDre7_4\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_5' value='nao' onclick='contabilizar(\"btnCheckDre7_5\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_6' value='NA' onclick='contabilizar(\"btnCheckDre7_6\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As especificações de validação de interface foram implantadas?</td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_7' value='sim' onclick='contabilizar(\"btnCheckDre7_7\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_8' value='nao' onclick='contabilizar(\"btnCheckDre7_8\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Interface' id='btnCheckDre7_9' value='NA' onclick='contabilizar(\"btnCheckDre7_9\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
        }
    }
    else if(artefato === "Product Backlog"){
        switch(dre){
            case "DRE1":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>O broduct backlog possui a identificação dos stakeholders?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre1_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre1_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre1_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As principais expectativas da persona(stakeholder) estão definidas e agrupadas?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre1_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre1_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre1_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As features relacionadas às personas foram determinadas?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre1_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre1_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre1_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre1_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE2":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe separação de funcionalidades por usuário no projeto?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre2_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre2_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre2_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>A principal feature da persona soluciona seus probremas e atende as suas expectativas?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre2_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre2_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre2_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As funcionalidades correspondestes a feature a viabilizam?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre2_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre2_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre2_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre2_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE3":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe a elaboração de user stories para cada feature do projeto?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre3_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre3_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre3_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Existe a descrição de cada feature do sistema?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre3_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre3_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre3_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As funcionalidades das features relacionam-se com questões cosméticas?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre3_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre3_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre3_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre3_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE4":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Os requisitos funcionais foram refinados, elaborados e alocados no product backlog?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre4_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre4_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre4_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Os requisitos não-funcionais foram refinados, elaborados e alocados no product backlog?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre4_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre4_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre4_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As interfaces internas e externas foram definidas?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre4_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre4_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre4_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre4_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE5":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As funcionalidades e features esboçam as condições de mercado do usuário?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre5_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre5_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre5_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>Os cenários de mercado foram identificados?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre5_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre5_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre5_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Os conceitos operacionais estão relacionados com os cenários de mercado dos stakeholders?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre5_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre5_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre5_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre5_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE6":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Os critérios das features e funcionalidades do sistemas estão devidamente definidos em acordo com as necessidades do usuário?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre6_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre6_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre6_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>Os requisitos estão sendo analisados de acordo com a necessidade de cada interessado?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre6_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre6_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre6_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Estão sendo implantadas as restrições para cada interessado?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre6_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre6_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre6_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre6_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
            case "DRE7":
                retorno += "<tr>";
                retorno += "<td> Não conformidade: </td>";
                retorno += "<td> Sim </td>";
                retorno += "<td> Não </td>";
                retorno += "<td>N.A</td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>As funcionalidades foram validadas de acordo com as especificações?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_1_PB' value='sim' onclick='contabilizar(\"btnCheckDre7_1_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_2_PB' value='nao' onclick='contabilizar(\"btnCheckDre7_2_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_3_PB' value='NA' onclick='contabilizar(\"btnCheckDre7_3_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";    
                retorno += "<td>As especificações para a validação das features foram criadas priorizadas a partir das necesidades e expectativas do usuário? </td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_4_PB' value='sim' onclick='contabilizar(\"btnCheckDre7_4_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_5_PB' value='nao' onclick='contabilizar(\"btnCheckDre7_5_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_6_PB' value='NA' onclick='contabilizar(\"btnCheckDre7_6_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                retorno += "<tr>";
                retorno += "<td>Foram implantadas formas de validação das funcionalidades presentes nas features?</td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_7_PB' value='sim' onclick='contabilizar(\"btnCheckDre7_7_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_8_PB' value='nao' onclick='contabilizar(\"btnCheckDre7_8_PB\", \"Interface\")'></td>";
                retorno += "<td><input type='checkbox' name='Product Backlog' id='btnCheckDre7_9_PB' value='NA' onclick='contabilizar(\"btnCheckDre7_9_PB\", \"Interface\")'></td>";
                retorno += "</tr>";
                break;
        }
    }
    return retorno;   
};