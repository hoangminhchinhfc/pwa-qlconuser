
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(registration) {
      console.log('Service Worker đăng ký thành công:', registration.scope);
    }).catch(function(error) {
      console.log('Service Worker đăng ký thất bại:', error);
    });
}
