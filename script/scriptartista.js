let artistaid;
let presentacion;
let api;
let data_track;
let imgartista;
async function declaration()
{
    api=new ScriptApi();
    const token=JSON.parse(localStorage.getItem("data")).access_token;
    artistaid=JSON.parse(localStorage.getItem("artistaid"));
    imgartista=await api.obtener_imagenartista(token,artistaid.id);
    data_track=await api.obtener_toptrack(token,artistaid.id);
    presentacion=new PresentacionArtista(data_track,artistaid);
    presentacion.cargar_url(imgartista,artistaid.external_urls.spotify,artistaid.uri);
    presentacion.agregar_data_artistaid();
    presentacion.agregardata_tracks();
    console.log(data_track);
   
    
}

window.addEventListener("load",declaration);