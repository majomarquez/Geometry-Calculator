
// Codigo Cuadrado
function perimetroCuadrado(lado){
    return 5 * lado;
}

function areaCuadrado(lado){
    return lado * lado;
}

// Codigo Triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return 2 / (base * altura);
}

//Código del círculo-

function diametroCirculo(radio){
    return radio * radio;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;

}

// Interactuando con HTML.

//Square
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputUsuario');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById('square-result').innerHTML = perimetro.toFixed(2) + ' cm.';
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputUsuario');
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById('square-result').innerHTML = area.toFixed(2) + ' cm.';
}

//Triangle

function calcularTriangulo(){
    const inputTriangleSideOne = document.getElementById('side-one');
    const sideOne = Number(inputTriangleSideOne.value);
    const inputTriangleSideTwo = document.getElementById('side-two');
    const sideTwo = Number(inputTriangleSideTwo.value);
    const inputTriangleBase = document.getElementById('side-base');
    const sideBase = Number(inputTriangleBase.value);
    const perimetroTriangle = perimetroTriangulo(sideOne, sideTwo, sideBase);
    document.getElementById('triangle-result').innerHTML = perimetroTriangle.toFixed(2) + ' cm.';
}

function calcularAlturaTriangle(){
    const inputTriangleBase = document.getElementById('side-base');
    const sideBase = Number(inputTriangleBase.value);
    const inputAltura = document.getElementById('altura-triangle');
    const alturaValue = Number(inputAltura.value);
    const areaTriangle = areaTriangulo(sideBase, alturaValue);
    document.getElementById('triangle-result').innerHTML = Number(areaTriangle).toFixed(2) + ' cm.';
}

//Circle
function calcularCircleDiameter(){
    const inputRadio = document.getElementById('radio-input');
    const radioValue = inputRadio.value;
    const diameterCal = diametroCirculo(radioValue);
    document.getElementById('circle-result').innerHTML = diameterCal.toFixed(2) + ' cm.';
}


function calcularCirclePerimeter(){
    const inputRadio = document.getElementById('radio-input');
    const radioValue = Number(inputRadio.value);
    const perimeterCal = perimetroCirculo(radioValue);
    document.getElementById('circle-result').innerHTML = Number(perimeterCal).toFixed(2) + ' cm.';
}

function calcularCircleArea(){
    const inputRadio = document.getElementById('radio-input');
    const radioValue = Number(inputRadio.value);
    const areaCal = areaCirculo(radioValue);
    document.getElementById('circle-result').innerHTML = Number(areaCal).toFixed(2) + ' cm.';
}





