let url = "https://api.coincap.io/v2/assets	"

async function coinData() {
    let  response1 = await fetch(url)  
    let data1 = await  response1.json();  
   
    
    document.getElementById("btc").innerText = `$  ${Math.floor(data1.data[0].priceUsd)}`
    document.getElementById("eth").innerText = `$  ${Math.floor(data1.data[1].priceUsd)}`
    document.getElementById("doge").innerText = `$  ${data1.data[6].priceUsd}`
    document.getElementById("tether").innerText = `$  ${Math.floor(data1.data[2].priceUsd)}`
}

coinData();