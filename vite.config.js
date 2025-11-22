import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Arquivo de configuração do Vite — agora corrigido (apenas 1 export default)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});

