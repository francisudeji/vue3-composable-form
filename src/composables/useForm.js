import { reactive, watchEffect, watch } from 'vue';

function useForm({ defaultValues, onSubmit, defaultValidation }) {
  const values = reactive(defaultValues);
  console.log(defaultValidation, 'default');

  watchEffect(() => console.log(values));

  watch(
    () => values.firstname,
    (count) => {
      console.log(count);
    }
  );

  function handleSubmit() {
    onSubmit(values);
  }

  return { values, handleSubmit };
}

export default useForm;
