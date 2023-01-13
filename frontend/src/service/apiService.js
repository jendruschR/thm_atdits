import axios from "axios";

class ApiService {
  sendMessage = (message) => {
    axios.get("http://localhost:8080/message", { params: { q: message } });
  };
}
export default new ApiService();
