console.log('JS OK');
console.log('Vue OK', Vue);


const app = Vue.createApp({
    name: 'Email List API',
    data(){
        return {
            emails: [],
            apiEmail: 'https://flynn.boolean.careers/exercises/api/random/mail',
            errorMessage: '',
            emailNumbers: 10
        }
    }, 
});