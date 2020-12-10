<template>
  <div>
    {{ form.values }}
    ----------------------
    <!-- {{ form.isValid }} -->
    <form @submit.prevent="form.handleSubmit">
      <div>
        <input
          v-model="form.values.firstname"
          type="text"
          placeholder="first name"
        />
      </div>
      <div>
        <input
          v-model="form.values.lastname"
          type="text"
          placeholder="first name"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import useForm from '@/composables/useForm';
import * as yup from 'yup';

export default {
  name: 'App',
  setup() {
    const form = useForm({
      defaultValues: { firstname: '', lastname: '' },
      onSubmit(values) {
        console.log(values);
      },
      defaultValidation: yup.object().shape({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
      }),
    });

    return { form };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
