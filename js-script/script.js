const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            message: 'Giuro ci sto provando!',
            mrClass: 'mr-font'
        }
    }
}).mount('#app');
