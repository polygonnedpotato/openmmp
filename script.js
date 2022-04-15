if(navigator.serviceWorker){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js')
    .then(reg=>console.debug('service worker registered'))
    .catch(err=>console.error(`Service Worker failed to install: ${err}`))
  })
}