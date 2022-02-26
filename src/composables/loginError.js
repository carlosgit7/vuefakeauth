import { ref } from "vue";

const loginError = () => {
  const error = ref(null);
  const setError = (value) => {
    error.value = value;
  };
  return { error, setError };
};

export default loginError;