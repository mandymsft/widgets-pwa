const registerServiceWorker = async () => {
  try {
    await navigator.serviceWorker.register('/widgets-pwa/sw.js', { scope: '/widgets-pwa/' });
    console.log('Service worker registered');
  } catch (e) {
    console.log(`Registration failed: ${e}`);
  }
}

if (navigator.serviceWorker) {
  registerServiceWorker();
}