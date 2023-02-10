let nameCard = document.querySelector('#name')
let NumCard = document.querySelector('#NumCard')
let mes = document.querySelector('#mes')
let ano = document.querySelector('#ano')
let cvc = document.querySelector("#cvc")
let numberCardFrente = document.querySelector(".numberCardFrente")
let textCardVerso = document.querySelector('.textCardVerso')
let textNome = document.querySelector(".textNome")
let textAno = document.querySelector("#textAno")
let textMes = document.querySelector('#textMes')
let validNum = false;
let validName = false;
let validMes = false;
let validAno = false;
let validCvc = false;
function changeName(){
    if(nameCard.value==""){
        textNome.innerText = 'jane appleseed'
    }else{
        textNome.innerText = nameCard.value
    }  
}

function changeNumber(){
   
    if(NumCard.value==""){
        numberCardFrente.innerText = '0000 0000 0000 0000'
    }else{
        let numeroDigitado = NumCard.value.padEnd(16,'0')
        let numeroFormatado =numeroDigitado.substring(0,4)+' '+numeroDigitado.substring(4,8)+' '+numeroDigitado.substring(8,12)+' '+ numeroDigitado.substring(12,16)
        numberCardFrente.innerText = numeroFormatado
        }
}

function changeMes(){
    if(mes.value==""){
        textMes.innerText = "00"
    }else {
        textMes.innerText = mes.value.padStart(2,'0')
    }
}
function changeAno(){
    if(ano.value==""){
        textAno.innerText = "00"
    }else {
        textAno.innerText = ano.value.padStart(2,'0')
    }
}
function changeCVC(){
    if(cvc.value==""){
        textCardVerso.innerText = "000"
    }else {
        textCardVerso.innerText = cvc.value.padStart(3,'0')
    }
}

function confirmar(){
    let sate = document.querySelector('.state')
    let erro = document.querySelectorAll('.erro')
    let erroNumber = document.querySelector('#erroNumber')
    let erroData = document.querySelector('#erroData')
    let erroCVC = document.querySelector('#erroCVC')
   
    /*VALIDAÇÃO DO NUMERO DO CARTÃO*/ 
    if(NumCard.value== 0 || NumCard.value.toString().length != 16 || parseInt(NumCard.value) !=  NumCard.value){
        erroNumber.style.visibility="visible"
        validNum = false
    }else{
        erroNumber.style.visibility="hidden"
        validNum = true
    }
    /*VALIDAÇÃO DO MES*/ 
    if(mes.value==0 || mes.value>12){
        erroData.style.visibility="visible"
        validMes = false
    }else{
        erroData.style.visibility="hidden"
        validMes = true
    }
        /*VALIDAÇÃO DO ANO*/ 
    if(ano.value==0){
        erroData.style.visibility="visible"
        validAno = false
    }else{
        erroData.style.visibility="hidden"
        validAno = true
    }
    /*VALIDAÇÃO DO CVC*/ 
    if(cvc.value==0 || cvc.value.length>3 ){
        erroCVC.style.visibility="visible"
        validCvc=false
    }else{
        erroCVC.style.visibility="hidden"
        validCvc=true
    }

    //VALIDAÇÃO NOME
    if(nameCard!=""){
        validName = true;
    }else{
        validName=false
    }
    /*VALIDAÇÃO FORMULARIO COM MSG OK*/ 
    let form = document.querySelector(".form")
    
    if( validNum && validName && validMes && validAno &&validCvc){
        sate.style.display="flex"
        form.style.display = 'none'
    }else{
        sate.style.display="none"
        form.style.display = 'flex'
    }

} 

function voltar(){
    let botaoState = document.querySelector('.botaoState')
    let sate = document.querySelector('.state')
    let form = document.querySelector(".form")

        sate.style.display="none"
        form.style.display = 'flex'
        nameCard.value =''
        NumCard.value =''
        mes.value =''
        ano.value =''
        cvc.value =''
       
}






