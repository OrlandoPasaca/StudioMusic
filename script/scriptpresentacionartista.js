class PresentacionArtista
{
    d_track;
    a_id;
    constructor(data_track,artistaid)
    {
        this.d_track=data_track;
        this.a_id=artistaid;
        
    }
    agregar_data_artistaid()
    {
        const poster=document.getElementById("cont_poster");
    }
    agregardata_tracks()
    {
        const cont_musica=document.getElementById("contenedormusica");
        for(var x=0;x<this.d_track.tracks.length-1;x++)
        {
            var clonediv=document.getElementsByClassName("temax")[0].cloneNode(true);
            cont_musica.appendChild(clonediv);
        }
        const foto=document.getElementsByClassName("foto");
        for(var x=0;x<this.d_track.tracks.length;x++)
        {
            foto[x].style.backgroundImage="url("+this.d_track.tracks[x].album.images[0].url+")";
        }
        const album=document.getElementsByClassName("t_album");
        for(var x=0;x<this.d_track.tracks.length;x++)
        {
            album[x].innerHTML=this.d_track.tracks[x].album.name;
        }
        const nombre=document.getElementsByClassName("t_nombre");
        for(var x=0;x<this.d_track.tracks.length;x++)
        {
            nombre[x].innerHTML=this.d_track.tracks[x].name;
        }
        const vista=document.getElementsByClassName("vista");
        for(var x=0;x<this.d_track.tracks.length;x++)
        {
            vista[x].src="https://open.spotify.com/embed?uri="+this.d_track.tracks[x].uri;

        }
        
    }
    cargar_url(img,link_artista,uri)
    {
        const poster=document.getElementById("cont_poster");
        const link=document.getElementById("link_artista");
        const follow=document.getElementById("follow");
        follow.src="https://open.spotify.com/follow/1/?uri="+uri+"&size=detail&theme=dark";
        link.setAttribute("href",link_artista);
        poster.style.backgroundImage="url("+img+")";
    }
}
