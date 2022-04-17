if(navigator.serviceWorker&&location.hostname!="localhost"&&location.hash!="#test"){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js')
    .then(reg=>console.debug('service worker registered'))
    .catch(err=>console.error(`Service Worker failed to install: ${err}`))
  })
}else{
  if(location.hostname=="localhost"||location.hash=="#test"){
    console.warn("Service Worker Registration Skipped: Testing Server")
  }
}