const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            message: 'Giuro ci sto provando!',
            mrClass: 'mr-font1',
            image: '',
            altImage: 'angry programmer'
        }
    },
    methods: {
        changeFont(){
            this.mrClass = this.mrClass === 'mr-font1' ? 'mr-font2' : 'mr-font1';
        },
        generatorImg(){
            this.image = './img/OIG1.jfif'
        }
    }
}).mount('#app');
