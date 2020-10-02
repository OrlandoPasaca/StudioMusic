class PresentacionTrack
{
    d_track
    constructor(data_track)
    {
        this.d_track=data_track;

    }
    cargardata()
    {
        console.log(this.d_track.date);
        const poster=document.getElementById("poster");
        const album=document.getElementById("nombre_album");
        const link=document.getElementById("link_album");
        const nombre=document.getElementById("nombre_artist");
        const tipo=document.getElementById("tipo");
        const fecha=document.getElementById("fecha");
        const iframe=document.getElementsByTagName("iframe")[0];
        poster.style.backgroundImage="url("+this.d_track.image+")";
        album.innerHTML=this.d_track.name;
        link.setAttribute("href",this.d_track.href);
        nombre.innerHTML="Artista: "+this.d_track.artists;
        tipo.innerHTML="Tipo: "+this.d_track.type;
        fecha.innerHTML="Fecha de estreno: "+this.d_track.date;
        iframe.src="https://open.spotify.com/embed?uri="+this.d_track.uri;



    }
}