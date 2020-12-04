<template>
  <div>
    {{ form.values }}
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

export default {
  name: 'App',
  setup() {
    const form = useForm({
      initialValues: { firstname: '', lastname: '' },
      onSubmit(values) {
        console.log(values.firstname);
      },
      // validation(validator, va)
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
