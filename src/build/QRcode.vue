<template>
    <div class = "qr-wrapper">
        <h2>QR-код на портфолио</h2>
        <canvas ref="canvas"></canvas>
        <p>Отсканируй, чтобы открыть</p>
        <button class = "visit-btn" @click="visitSite">Перейти по QR - коду</button>

    </div>
</template>

<script>
import QRcode from 'qrcode'
export default{
    name: 'QRcode', 
    data(){
        return{
            url: 'https://gleblatyshev.github.io/Robot/' //Указываем нужную ссылку
        }
    },
    mounted(){
        const canvas = this.$refs.canvas
        if(canvas){
            QRcode.toCanvas(canvas, this.url, {wigth: 180}, (error) =>{
                if (error) console.error(error)
            })
        }
    },
    methods: {
        visitSite(){
            window.open(this.url, '_blank')
        }
    }
}
</script>