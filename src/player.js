var player={

}
player.togglePlayback=function(){
  if(sessionStorage.getItem("PLAYER-PLAYBACKSTATE")){
    ui.elements.playpause.innerText="⏸"
    sessionStorage.setItem("PLAYER-PLAYBACKSTATE",false)
  }else{
    ui.elements.playpause.innerText="▶"
    sessionStorage.setItem("PLAYER-PLAYBACKSTATE",true)
  }
}
ui.elements.playpause.onclick=player.togglePlayback()