// vite.config.js
import { defineConfig } from "file:///Users/apple/deployment/tauri-demo/node_modules/vite/dist/node/index.js";
import react from "file:///Users/apple/deployment/tauri-demo/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(async () => ({
  plugins: [react()],
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true
  },
  // 3. to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXBwbGUvZGVwbG95bWVudC90YXVyaS1kZW1vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXBwbGUvZGVwbG95bWVudC90YXVyaS1kZW1vL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcHBsZS9kZXBsb3ltZW50L3RhdXJpLWRlbW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jICgpID0+ICh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcblxuICAvLyBWaXRlIG9wdGlvbnMgdGFpbG9yZWQgZm9yIFRhdXJpIGRldmVsb3BtZW50IGFuZCBvbmx5IGFwcGxpZWQgaW4gYHRhdXJpIGRldmAgb3IgYHRhdXJpIGJ1aWxkYFxuICAvL1xuICAvLyAxLiBwcmV2ZW50IHZpdGUgZnJvbSBvYnNjdXJpbmcgcnVzdCBlcnJvcnNcbiAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICAvLyAyLiB0YXVyaSBleHBlY3RzIGEgZml4ZWQgcG9ydCwgZmFpbCBpZiB0aGF0IHBvcnQgaXMgbm90IGF2YWlsYWJsZVxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAxNDIwLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gIH0sXG4gIC8vIDMuIHRvIG1ha2UgdXNlIG9mIGBUQVVSSV9ERUJVR2AgYW5kIG90aGVyIGVudiB2YXJpYWJsZXNcbiAgLy8gaHR0cHM6Ly90YXVyaS5zdHVkaW8vdjEvYXBpL2NvbmZpZyNidWlsZGNvbmZpZy5iZWZvcmVkZXZjb21tYW5kXG4gIGVudlByZWZpeDogW1wiVklURV9cIiwgXCJUQVVSSV9cIl0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVMsb0JBQW9CO0FBQ3JULE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWEsYUFBYTtBQUFBLEVBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtqQixhQUFhO0FBQUE7QUFBQSxFQUViLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUE7QUFBQTtBQUFBLEVBR0EsV0FBVyxDQUFDLFNBQVMsUUFBUTtBQUMvQixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
