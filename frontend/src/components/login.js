import { reactive } from "vue";
import axios from "axios";

export const login = reactive({
  authenticated: !!localStorage.getItem("jwt"), // Verificar si ya existe un token almacenado
  async login(email, password) {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.utilisateur));
        this.authenticated = true;
      }
    } catch (error) {
      console.error("Login error:", error.response || error);
      alert("Erreur lors de la connexion. Veuillez vérifier vos informations.");
    }
  },
  async logout() {
    this.authenticated = false;
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  },
});
