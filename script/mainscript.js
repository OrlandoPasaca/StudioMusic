const api=new ScriptApi();
let data_music;
let data_token;
let data_regueton;
let data_x;
let presentacion;
let cont_slider=[0,0,0];
let flecha_derecha=document.getElementsByClassName("flecha_derecha");
let flecha_izquierda=document.getElementsByClassName("flecha_izquierda");
let poster=document.getElementsByClassName("poster");
let link_artista=document.getElementsByClassName("link_artista");
let buscador;


async function declaracion()
{
    
    data_token=await api.obtener_token();
    if(data_token="NN")
    {
        data_token=await api.obtener_token();
    }
    buscador=new Buscador(data_token.access_token);
    data_music=await api.obtener_newreleases(data_token.access_token);
    if(data_music==401)
    {
        localStorage.removeItem("data");
        data_token=await api.obtener_token();
        data_music=await api.obtener_newreleases(data_token.access_token);
    }
    data_regueton=await api.obtener_playlist_regueton(data_token.access_token);
    data_x=await api.obtener_playlist_x(data_token.access_token);
    presentacion=new Presentacion(data_music,data_regueton,data_x);
    presentacion.creardivs_nuevostemas();
    presentacion.creardivs_regueton();
    presentacion.creardivs_x();
    for(var x=0;x<flecha_derecha.length;x++)
    {
    flecha_derecha[x].addEventListener("click",presentacion.click_flechaderecha);
    flecha_izquierda[x].addEventListener("click",presentacion.click_flechaizquierda);
    }
    for(var x=0;x<poster.length;x++)
    {
    poster[x].addEventListener("click",presentacion.click_poster);
    }
    for(var x=0;x<link_artista.length;x++)
    {
    link_artista[x].addEventListener("click",presentacion.click_artista);
    }
    
    

    
}
window.addEventListener("load",declaracion);