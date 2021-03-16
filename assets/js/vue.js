var practica2 = new Vue({
    el: "#practica2",
    data:{
        mesaje: 'PRACTICA 2!'
    },
    methods:{
        calcular:function(){
            var radio = parseFloat(document.getElementById("txtRadio").value);
            
            area=Math.PI * radio * radio;
            perimetro= 2 * Math.PI * radio;
            document.getElementById('labelRadio').innerText = area.toFixed(2);
            document.getElementById('labelPerimetro').innerText = perimetro.toFixed(2);            
        },
        limpiar:function(){
            document.getElementById('txtRadio').value = '';
            document.getElementById('txtX').value = '';
            document.getElementById('txtY').value = '';
            document.getElementById('labelRadio').innerText = '';
            document.getElementById('labelPerimetro').innerText =''; 
        }
    }
});