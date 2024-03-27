const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            message: 'Giuro ci sto provando!',
            mrClass: 'mr-font1'
        }
    },
    methods: {
        changeFont(){
            this.mrClass = this.mrClass === 'mr-font1' ? 'mr-font2' : 'mr-font1';
        }

    }
}).mount('#app');
