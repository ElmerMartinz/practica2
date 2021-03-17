var practica2 = new Vue({
    el: "#practica2",
    data:{
        mesaje: 'PRACTICA 2!',
        mostrar: false,
        alerta:{
          titulo: "Error",
          mensaje:"Texto"
        },
    },
    methods:{
        calcular:function(){
            if (document.getElementById("txtRadio").value ==""){
                practica2.mostrarAlerta("Campo vacio","Ingrese el radio!");
            }
            else if (document.getElementById("txtX").value ==""){
                practica2.mostrarAlerta("Campo vacio","Ingrese el valor de X!");
            }
            else if (document.getElementById("txtY").value ==""){
                practica2.mostrarAlerta("Campo vacio","Ingrese el valor de Y!");
            }
            else{
            var radio = parseFloat(document.getElementById("txtRadio").value);
            
            area=Math.PI * radio * radio;
            perimetro= 2 * Math.PI * radio;
            document.getElementById('labelRadio').innerText = area.toFixed(2);
            document.getElementById('labelPerimetro').innerText = perimetro.toFixed(2);
            this.mostrar = true;
            }
        },
        limpiar:function(){
            this.mostrar = false;
            document.getElementById('txtRadio').value = '';
            document.getElementById('txtX').value = '';
            document.getElementById('txtY').value = '';
            document.getElementById('labelRadio').innerText = '';
            document.getElementById('labelPerimetro').innerText =''; 
        },
        
        mostrarAlerta:function(titu,msg){
            this.alerta.titulo=titu;
            this.alerta.mensaje=msg;
            $("#miAlerta").show('fade');
            setTimeout(function(){
                $("#miAlerta").hide('fade');
            },3000);
            
        },
    }
});
