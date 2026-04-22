export function form () {
    const emptyForm = function() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
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
                    return;
                }
                fetch('http://127.0.0.1:8000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.formData.name,
                        email: this.formData.email,
                        subject: this.formData.subject,
                        message: this.formData.message
                    })
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
                    this.errors = {};
                    this.responseMessage = 'Message sent successfully!';
                    this.formData = emptyForm();
                    this.submitted = true;
                })
                .catch(data => {
                    if (data.errors) {
                        this.errors = {};
                        if (data.errors.name) this.errors.fullName = data.errors.name[0];
                        if (data.errors.email) this.errors.email = data.errors.email[0];
                        if (data.errors.subject) this.errors.subject = data.errors.subject[0];
                        if (data.errors.message) this.errors.message = data.errors.message[0];
                    } else {
                        this.errors = {
                            general: "Something went wrong with sending your message. Please try again later."
                        };
                    }
                    this.responseMessage = '';
                })
            }
        }
    })
    .mount("#contact-app")
}