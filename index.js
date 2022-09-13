fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cG4QRIvo3Ig0eDPabHxusnqYCqwkypPg4JxYoLAnJ6dxDGSdjSYjGMulIeUSttx8')
.then(res => res.json())
.then(data=>{console.log(data)})