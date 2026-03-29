export function form () {
    const emptyForm = function() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        honeypot: '',
        testAnswer:''
    }
}

const app = Vue.createApp({
    data() {
        return {
            formData: emptyForm(),
            responseMessage: '',
            errors: {},
            buttonText: "Submit Message",
            submitted: false
        }
    },
    methods: {
        submitForm() {
            fetch('email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(this.formData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.errors) {
                    this.errors = data.errors;
                    this.responseMessage = '';
                    return
                }
                //No Errors, or success state
                this.errors = {};
                this.responseMessage = data.message;
                this.formData = emptyForm();
                this.submitted = true;
            })
            .catch(error=>{
                console.log(error);
                this.errors = {
                    general: "It seems you have lost your internet connection. Please try again later"
                };
                this.responseMessage = '';
            })
        }
    }
})
.mount("#app")
}