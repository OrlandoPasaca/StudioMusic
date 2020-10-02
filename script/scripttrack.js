let data_track;
let presentacion;
function declaration()
{

    data_track=JSON.parse(localStorage.getItem("trackid"));
    presentacion=new PresentacionTrack(data_track);
    presentacion.cargardata();
    
}
window.addEventListener("load",declaration);