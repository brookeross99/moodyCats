document.addEventListener("DOMContentLoaded", () => {

    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cG4QRIvo3Ig0eDPabHxusnqYCqwkypPg4JxYoLAnJ6dxDGSdjSYjGMulIeUSttx8&limit=5')
    .then(res => res.json())
    .then(catData=>{
        catData.forEach(renderCatCards)
    })

    const catCard=document.getElementById('cat-collection')

    function renderCatCards(cat){
        const catCardDiv=document.createElement('div')
        catCardDiv.className='card';

        const catName=document.createElement('h2')
        catName.textContent=cat.id

        const catImg=document.createElement('img')
        catImg.src=cat.url
        catImg.className='cat-avatar'

        catCard.append(catCardDiv,catName,catImg)
    }
})
