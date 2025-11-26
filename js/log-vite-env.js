// Small module to log Vite-provided env var for debugging in module-capable setups
try {
  // This will only run in module contexts (Vite / ES module environment)
  console.log('VITE_API_URL:', import.meta.env && import.meta.env.VITE_API_URL);
} catch (e) {
  // If import.meta isn't available (non-module environments), fail silently
  console.warn('import.meta.env not available in this environment');
}
