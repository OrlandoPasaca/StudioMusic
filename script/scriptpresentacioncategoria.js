class Categoria
{
    d_id;
    d_track;
    constructor(data_id,data_track)
    {
        this.d_id=data_id;
        this.d_track=data_track;
    }
    creardivs_musica(data_img,data_nombre,genero)
    {
        console.log(this.d_track);
        console.log(this.d_track);
        document.getElementsByTagName("h1")[0].innerHTML=genero;
        for(var x=0;x<data_img.length;x++)
        {
        let main=document.getElementsByTagName("main")[0];
        let newdiv=document.createElement("div");
        newdiv.className="cont_musica";
        
        let newimage=document.createElement("div");
        newimage.className="img";
        newimage.style.backgroundImage="url("+data_img[x]+")";
        let newa2=document.createElement("a");
        newa2.className="link";
        newa2.setAttribute("href","./track.html");
        newa2.addEventListener("click",(e)=>this.guardar_data(e));
        let newa=document.createElement("a");
        newa.className="nombre";
        newa.innerHTML=data_nombre[x];
        main.appendChild(newdiv);
        newdiv.appendChild(newimage);
        newimage.appendChild(newa2);
        newdiv.appendChild(newa);

        }
        

    }
    guardar_data(e)
    {
        console.log(this.d_track.length);
        console.log(e.target);
        const link=document.getElementsByClassName("link");
        console.log(link[0]);
        for(var x=0;x<this.d_track.length;x++)
        {
        if(e.target==link[x])
        {
            
            let data={"artists":this.d_track[x].artists[0].name,"date":this.d_track[x].album.release_date,"href":this.d_track[x].album.href,"image":this.d_track[x].album.images[0].url,"name":this.d_track[x].name,"trackid":this.d_track[x].id,"type":this.d_track[x].album.album_type,"uri":this.d_track[x].uri};
            localStorage.setItem("trackid",JSON.stringify(data));
        }
        }
    }
}