import { reactive } from 'vue';

function useForm({ initialValues, onSubmit }) {
  const values = reactive(initialValues);

  function handleSubmit() {
    onSubmit(values);
  }

  return { values, handleSubmit };
}

export default useForm;
