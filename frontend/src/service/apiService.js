import axios from "axios";

class ApiService {
  sendMessage = async (message) => {
    return await axios.get(`http://${window.location.hostname}:8080/message`, {
      params: { q: message },
    });
  };
}
export default new ApiService();
