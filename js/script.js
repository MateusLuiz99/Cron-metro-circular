// Selecionando classes dos botões do HTML
var btnIni = document.querySelector(".btn-iniciar");
var btnPause = document.querySelector(".btn-pausar");
var btnCont = document.querySelector(".btn-continuar");
var btnReset = document.querySelector(".btn-resetar");

// Variáveis para o cronômetro e contador de tempo
var hr = 0;
var mn = 0;
var sg = 0;

var tempo = 1000;
var cro;
// Essa variável do tipo booleano será importante 
// para pausar e continuar o cronômetro
let isPaused = false;

// Função que inicia o cronômetro
function croIniciar(){
    // Essa variável recebe uma função global setInterval 
    // recebendo a função "croTempo" que inicia a contagem 
    // e a variável "tempo" que será o intervalo de tempo 
    // em milissegundos que o cronômetro deve atrasar
    cro = setInterval(croTempo, tempo);
}

// Função que pausa a contagem
function croPausar(){    
    // isPaused recebe true e isso pausa a contagem
    isPaused = true;
    // O botão de iniciar é ocultada
    btnIni.style.display = "none";
    // O botão para continuar é desocultada
    btnCont.style.display = "block";
}

// Função que continua a contagem quando ela é pausada
function croContinuar(){
    // Como isPaused recebe false quando a função é chamada 
    // a contagem continua
    isPaused = false;
    // O botão para continuar é ocultada
    btnCont.style.display = "none";
    // O botão de iniciar é desocultada
    btnIni.style.display = "block";
}

// Função que zera todos os valores dos segundos, minutos e horas
function croReset(){
    // A função golbal clearInterval limpa todo o valor da 
    // variável cro
    clearInterval(cro);
    // Zera os valores das variáveis
    hr = 0;
    mn = 0;
    sg = 0;
    // O botão para continuar é ocultada
    btnCont.style.display = "none";
    // O botão de iniciar é desocultada
    btnIni.style.display = "block";
    // Zera o valor direto do documento HTML
    document.getElementById("crono").innerText = "00:00:00";
}

// Função que inicia, formata e passa os valores para o documento HTML
function croTempo(){
    // Se não estiver pausado
    if(!isPaused){
        // Segundo + 1 sucessivamente
        sg++;
        // Se segundo = 60 (1 minuto)
        if(sg == 60){
            // Zera o seu valor
            sg = 0;
            // Minuto + 1 sucessivamente
            mn++;
            // Se minuto = 60 (1 hora)
            if(mn == 60){
                // Zera o seu valor
                mn = 0;
                // Hora + 1 sucessivamente
                hr++;
            }
        }
    }

    // Formatação do tempo, (hr < 10 ?) Se hora for menor que 10, 
    // ('0' + hr) colocar '0' + o valor de hora, (: hr) se não, 
    // colocar apenas o valor de hora. Ou seja, os valores de 0 a 9
    // terá uma string '0' como "00", "01", "02"..., mas apartir do 
    // número 10 essa string é removida, "10", "11", "12".
    var format = (hr < 10 ? '0' + hr : hr) + ':' 
        + (mn < 10 ? '0' + mn : mn) + ':' 
        + (sg < 10 ? '0' + sg : sg);

    // O documento com o id crono recebe o valor formatado da variável 
    // format
    document.getElementById("crono").innerText = format;

    // Retorno do valor de format onde ela é chamada na função croInicior
    return format;
}
