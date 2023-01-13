import axios from "axios";

class ApiService {
  sendMessage = (message) => {
    axios.post("http://localhost:666/message", message);
  };
}
export default new ApiService();
