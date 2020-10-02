let api=new ScriptApi();
let data_categoria;
let token;
let data_img;
let data_nombre;
let genero;
let data_id;
let data_track;
async function declaration()
{
    genero=localStorage.getItem("genero");
    valor=localStorage.getItem("categoria");
    token=JSON.parse(localStorage.getItem("data"));
    data_categoria=await api.obtener_playlist(valor,token.access_token);
    data_track=data_categoria.map(res=>res.track);
    data_id=data_categoria.map(res=>res.track.id);
    data_img=data_categoria.map(res=>res.track.album.images[0].url);
    data_nombre=data_categoria.map(res=>res.track.name);
    const presentacion=new Categoria(data_id,data_track);
    presentacion.creardivs_musica(data_img,data_nombre,genero);
    
}
window.addEventListener("load",declaration);