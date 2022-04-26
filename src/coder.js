/*OpenMMP Coder
uses: encoding / decoding

*/
const{createFFmpeg,fetchFile}=FFmpeg
const FFmpeg=createFFmpeg({log:true})
    
// function determineDecoder(type=null){
//   if(type=="mp3float"||type=="mp3"){
//     return "FFMPEG"
//   }
// }
function decodeMedia(inputData,inputDataType=null,options={}){
  decoder="ffmpeg"
  if(decoder=="ffmpeg"){
    const{name}=inputData.files[0];
    
  }
}
const specs={
  decoding:{"ffmpeg":false,"libopenmpt":false,"vgmstream":false},
  encoding:{"ffmpeg":false}
}
