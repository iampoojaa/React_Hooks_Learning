import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-hooks-d1685-default-rtdb.firebaseio.com/",
});

export default instance;
