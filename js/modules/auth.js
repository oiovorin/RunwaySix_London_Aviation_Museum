export function loginVueApp () {
    const emptyForm = function() {
    return {
        email: '',
        password: '',
        honeypot: ''
    }
}

const app = Vue.createApp({
    data() {
        return {
            formData: emptyForm(),
            responseMessage: '',
            errors: {},
            buttonText: "Submit",
            submitted: false
        }
    },
    methods: {
        submitForm() {
            if (this.formData.honeypot) {
                this.submitted = true;
                return
            }
            fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({email: this.formData.email, password: this.formData.password })
            })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(data => {
                        throw data;
                    });
                }
                return res.json();
            })
            .then(data => {
                // This only runs on 200 — guaranteed success
                this.errors = {};
                localStorage.setItem('authToken', data.token);
                this.submitted = true;

                setTimeout(() => {
                    window.location.href = 'admin-artifacts.html';
                }, 800);
            })
            .catch(data => {
                if (data.errors) {
                    this.errors = {};
                    if (data.errors.email) this.errors.email = data.errors.email[0];
                    if (data.errors.password) this.errors.password = data.errors.password[0];
                } else {
                    this.errors = {
                        general: "It seems you have lost your internet connection. Please try again later"
                    };
                }
                this.responseMessage = '';
            })
        }
    }
})
.mount("#login-app")
}