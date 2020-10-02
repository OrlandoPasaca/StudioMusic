let data_album;
let api;
let albumid;
let scripalbum;
let data_track=[];
async function declaracion()
{
    api=new ScriptApi();
    let token=JSON.parse(localStorage.getItem("data")).access_token;
    albumid=JSON.parse(localStorage.getItem("albumid"));
    data_album= await api.obtner_albums_x(token,albumid.albumid);
    for(var x=0;x<data_album.length;x++)
    {
    data_track[x]=await api.obtener_track(token,data_album[x].id);
    }
    console.log(albumid);
    scripalbum=new PresentacionAlbum(albumid,data_track);
    scripalbum.agregardata_pres();
    scripalbum.agregardata_tracks();
    console.log(data_album);
    console.log(data_track);
}
window.addEventListener("load",declaracion);