<template>
  <form>
    <h1>Crea una nueva cuenta</h1>
    <v-text-field
      v-model="firstName"
      :error-messages="firstNameErrors"
      label="Nombre"
      required
      @input="$v.firstName.$touch()"
      @blur="$v.firstName.$touch()"
    />

    <v-text-field
      v-model="lastName"
      label="Apellido"
      @input="$v.lastName.$touch()"
      @blur="$v.lastName.$touch()"
    />

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />

    <v-btn color="normal" class="mr-4" @click="submit"> Crear</v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import { RepositoryFactory } from "../repositories/RepositoryFactory";

export default {
  name: "AccountsForm",

  mixins: [validationMixin],

  validations: {
    firstName: { required },
    email: { required, email },
  },

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
  }),

  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.required && errors.push("Nombre requerido");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("No es un correo valido");
      !this.$v.email.required && errors.push("Correo Electrónico requerido");
      return errors;
    },
  },

  methods: {
    reset() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
    },

    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.commit("newAccount", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        });

        this.firstName = "";
        this.lastName = "";
        this.email = "";
      }
    },
  },
};
</script>

<style lang="scss">
h1 {
  font-family: "Roboto", sans-serif;
  text-align: left;
  color: whitesmoke;
  font-size: 35px;
}
</style>
