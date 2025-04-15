import { defineStore } from 'pinia';
import router from '@/router';
// import axios from 'axios';

const dataBaseUrl = `${import.meta.env.VITE_URL}/auth`;
 
interface User {
  ID_User: number;
  Nombre: string;
  Email: string;
  ID_Rol: number;
  Token: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') as string) as User | null,
    returnUrl: null as string | null,
    error: ''
  }),
  actions: {
    async login({ Email, Password }: { Email: string, Password: string }) {
      try {
        // Credenciales de prueba
        if (Email === 'daniel@daniel.com' && Password === '12345') {
          this.user = {
            ID_User: 1,
            Nombre: 'Daniel',
            Email: Email,
            ID_Rol: 1,
            Token: 'fake-token-123' // Simula un token
          };
          localStorage.setItem('user', JSON.stringify(this.user));
          router.push(this.returnUrl || '/dashboard');
        } else {
          this.setError('Credenciales incorrectas');
        }
      } catch (error) {
        this.setError('Error en el login');
      }
    },
    setError(message: string) {
      this.error = message;
      setTimeout(() => {
        this.error = '';
      }, 6000);
    },
    clearError() {
      this.error = '';
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push({ name: 'Login' });
    }
  }
});