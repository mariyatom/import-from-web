import { animate } from 'https://cdn.skypack.dev/motion'

const button = document.getElementById('animateButton')
const box = document.getElementById('box')

button.addEventListener('click', () => {
  animate(box, { x: 100, rotate: 45 }, { duration: 0.5 })
})
