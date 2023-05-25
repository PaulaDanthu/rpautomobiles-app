<template>
    <div>
        <h1>
            Contact
        </h1>
        <form class="contact-form" id="fs-frm" name="contact-form" accept-charset="utf-8" action="https://formspree.io/f/mjvdrzrk" method="post">
            <fieldset id="fs-frm-inputs">
                <label for="full-name">Votre nom</label>
                <input type="text" name="name" id="full-name" placeholder="Prenom Nom" required="">
                <label for="email-address">Votre e-mail</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email@example.fr" required="">
                <label for="telephone">Numéro de téléphone (Optionnel)</label>
                <input type="telephone" name="telephone" id="telephone" placeholder="06 12 34 56 78">
                <label for="message">Message</label>
                <textarea rows="6" name="message" id="message" placeholder="Votre message" required=""></textarea>
                <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission">
            </fieldset>
            <input type="submit" value="Envoyer">
        </form>
    </div>
    <my-footer />
</template>

<script>
import Footer from './Footer.vue';

export default {
    setup() {

    },

    components: {
        'my-footer': Footer
    }
}

</script>

<style>
.contact-form {
    margin-left: 10rem;
    margin-right: 10rem;
}
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
    font-family: inherit;
    font-size: 100%;
    color: inherit;
    border: none;
    border-radius: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
}
#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
    font-size: .825rem;
    margin-bottom: .5rem;
    padding-top: .2rem;
    display: flex;
    align-items: baseline;
}

/* border, padding, margin, width */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
    border: 1px solid rgba(0,0,0,0.2);
    background-color: rgba(255,255,255,0.9);
    padding: .75em 1rem;
    margin-bottom: 1.5rem;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
    background-color: white;
    outline-style: solid;
    outline-width: thin;
    outline-color: gray;
    outline-offset: -1px;
}
#fs-frm [type="text"],
#fs-frm [type="email"] {
    width: 100%;
}
#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
    width: auto;
    cursor: pointer;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
}
#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
    outline: none;
}
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
    margin-bottom: 0;
}
#fs-frm select {
    text-transform: none;
}

#fs-frm [type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
    display: inline-block;
    width: auto;
    margin: 0 .5em 0 0 !important;
}

#fs-frm [type="radio"] {
    -webkit-appearance: radio;
    -moz-appearance: radio;
    appearance: radio;
}


</style>