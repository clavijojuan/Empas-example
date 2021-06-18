import '../css/component.css';
// import webpacklogo from '../assets/img/webpack_logo.png';


export const saludar  = (nombre) => {
    console.log ( 'creando etiqueta h1')
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola,  ${nombre}`;

    document.body.append(h1)

    /*const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
*/

};