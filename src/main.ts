import './style.css'
import './ejemplos/eje1'
import './ejemplos/eje2'
import './ejemplos/eje3'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`

console.log('Hola mundo');
