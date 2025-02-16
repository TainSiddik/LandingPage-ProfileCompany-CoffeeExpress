const bg = document.getElementById('bg')
const bn = document.getElementById('bn')
const gambar = document.getElementById('gambar')
const text = document.getElementById('text')


const cola = () => {
    bg.style.backgroundColor = '#dc2626'
    bn.style.backgroundColor = '#0f172a'
    text.style.color = '#f1f5f9'
    gambar.src = "./img/coca-cola.png";
}
const sprite = () => {
    bg.style.backgroundColor = '#4ade80'
    bn.style.backgroundColor = '#bbf7d0'
    text.style.color = '#0f172a'
    gambar.src = "./img/sprite.png"
}