window.addEventListener('load', () => {
    const vm = new Vue({
        el: '#app',
        data:{
            mensaje:'Hola guapos',
            bitcoinData: {
                precio:null,
                tiempo:null
            }
        },
        created: function(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((val) => {
                this.bitcoinData.precio = val.data.bpi.USD.rate_float 
                this.bitcoinData.tiempo = val.data.time.updated
                console.log(this.bitcoinData)
            })

            .catch((err) => {
                console.log(err)

            })
                

        }


    })

}) 