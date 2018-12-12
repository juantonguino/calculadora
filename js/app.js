var calculadora ={
    num1:0,
    mum2:0,
    operation:"",
    display:"0",
    result:0,
    numpresssing:0,
    init: ()=>{
        calculadora.inicalizarTeclas();
        calculadora.display.onchange= calculadora.refrescarDisplay()
    },
    lessSize: function(){},
    standardSize: function(){},
    sumar:function(){},
    restar:function(){}, 
    multiplicar:function(){},
    división:function(){},
    ONC:()=>{
        calculadora.num1=0;
        calculadora.num2=0;
        calculadora.display='0';
        calculadora.result=0;
        calculadora.refrescarDisplay()
    },
    inicalizarTeclas:()=>{
        for(i=0; i<10; i++){
            let image= document.getElementById(i+"")
            image.onclick= ()=>{
                calculadora.display=calculadora.display.concat(image.id)
                calculadora.refrescarDisplay();
            }
        }
        let onc=document.getElementById("on")
        onc.onclick= ()=>{calculadora.ONC()}
        let punto=document.getElementById("punto");
        punto.onclick= ()=>{
            let index=calculadora.display.indexOf(".");
            if(index==-1){
                calculadora.display=calculadora.display.concat(".")
                calculadora.refrescarDisplay();
            }
        }
        let sign= document.getElementById("sign")
        sign.onclick=()=>{
            if(calculadora.numpresssing==2){
                calculadora.ONC();
            }
            if(calculadora.display[0]=='-'){
                calculadora.display=calculadora.display.replace("-","")
            }
            else if(calculadora.display.length>=1 && calculadora.display[0]!='0'){
                calculadora.display="-".concat(calculadora.display)
            }
            calculadora.numpresssing ++;
            calculadora.refrescarDisplay();
        }

        let sumar= document.getElementById("mas")
        let menos= document.getElementById("menos")
        let por = document.getElementById("por")
        let dividido= document.getElementById("dividido")
        let igual= document.getElementById("igual")

        igual.onclick=()=>{
            calculadora.num2= calculadora.display;
            let result=eval(calculadora.num1+calculadora.operation+calculadora.num2);
            calculadora.num1=result+"";
            calculadora.display= calculadora.num1
            calculadora.refrescarDisplay();
        }

        sumar.onclick= ()=>{
            calculadora.num1=calculadora.display
            calculadora.operation="+"
            calculadora.display=""
            calculadora.refrescarDisplay()
        }

        menos.onclick= ()=>{
            calculadora.num1=calculadora.display
            calculadora.operation="-"
            calculadora.display=""
            calculadora.refrescarDisplay()
        }
        por.onclick= ()=>{
            calculadora.num1=calculadora.display
            calculadora.operation="*"
            calculadora.display=""
            calculadora.refrescarDisplay()
        }
        dividido.onclick= ()=>{
            calculadora.num1=calculadora.display
            calculadora.operation="/"
            calculadora.display=""
            calculadora.refrescarDisplay()
        }
    },
    refrescarDisplay:()=>{
        if(calculadora.display.startsWith("0")){
            if(calculadora.display[1]=="0"){
                calculadora.display='0'
            }
            else if(calculadora.display[1]!="0"&&calculadora.display.length!=1){
                calculadora.display=calculadora.display.substring(1, calculadora.display.length);
            }
        }
        if(calculadora.display.length<=8){
            document.getElementById('display').innerHTML=calculadora.display
        }
        else{
            calculadora.display=document.getElementById('display').value
        }
    },

    sumar:()=>{

    }
}

calculadora.init();