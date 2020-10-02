class PresentacionAlbum
{
    alb_id;
    d_track;
    constructor(albumid,data_track)
    {
        this.alb_id=albumid;
        this.d_track=data_track;
    }
    agregardata_pres()
    {
        const poster=document.getElementById("poster");
        const nombre_album=document.getElementById("nombre_album");
        const link=document.getElementById("link_album");
        const nombre_artist=document.getElementById("nombre_artist");
        const tipo=document.getElementById("tipo");
        const fecha=document.getElementById("fecha");

        nombre_album.innerHTML=this.alb_id.name;
        link.setAttribute("href",this.alb_id.href);
        nombre_artist.innerHTML="Artista: "+this.alb_id.artists;
        tipo.innerHTML="Tipo: "+this.alb_id.type;
        fecha.innerHTML="Fecha de lanzamiento: "+this.alb_id.date;
        poster.style.backgroundImage="url("+this.alb_id.image+")";
    }
    agregardata_tracks()
    {
       
        const cont_musica=document.getElementById("contenedormusica")
        
        for(var x=0;x<this.d_track.length-1;x++)
        {
            var clonediv=document.getElementsByClassName("temax")[0].cloneNode(true);
            cont_musica.appendChild(clonediv);
        }
        const foto=document.getElementsByClassName("foto");
        for(var x=0;x<this.d_track.length;x++)
        {
            foto[x].style.backgroundImage="url("+this.d_track[x].album.images[0].url+")";
        }
        const album=document.getElementsByClassName("t_album");
        for(var x=0;x<this.d_track.length;x++)
        {
            album[x].innerHTML=this.d_track[x].album.name;
        }
        const nombre=document.getElementsByClassName("t_nombre");
        for(var x=0;x<this.d_track.length;x++)
        {
            nombre[x].innerHTML=this.d_track[x].name;
        }
        const vista=document.getElementsByClassName("vista");
        for(var x=0;x<this.d_track.length;x++)
        {
            vista[x].src="https://open.spotify.com/embed?uri="+this.d_track[x].uri;
        }
    }
}