class Presentacion 
{
    data_music;
    data_regueton;
    data_x;
    obtenerdata;
    api;
    cont_slider;

    constructor(data_music,data_regueton,data_x)
    {
        this.data_regueton=data_regueton;
        this.data_music=data_music;
        this.data_x=data_x
        this.api=new ScriptApi();
        this.cont_slider=0;
        
        
    }
    creardivs_nuevostemas()
    {
        console.log(this.data_music);
        const cont_presentacion=document.getElementsByClassName("contenedor_poster_artista")[0];
        for(let x=0;x<this.data_music.length;x++)
        {
            var newdiv=document.createElement("div");
            newdiv.className="contposter";
            cont_presentacion.appendChild(newdiv);
            var newdiv2=document.createElement("a");
            newdiv2.className="poster";
            if(this.data_music[x].album_type=="album")
            {
            newdiv2.setAttribute("href","./pages/albums.html");
            }
            else if(this.data_music[x].album_type=="single")
            {
                newdiv2.setAttribute("href","./pages/track.html");
            } 
            newdiv2.style.backgroundImage="url("+this.data_music[x].images[0].url+")";
            newdiv.appendChild(newdiv2);
            var newdiv10=document.createElement("div");
            newdiv10.innerHTML="Reproducir";
            newdiv2.appendChild(newdiv10);
            var newdiv3=document.createElement("div");
            newdiv3.className="cont_desc_musica";
            newdiv.appendChild(newdiv3);
            var newa=document.createElement("a");
            newa.className="nombrecancion";
            newa.innerHTML=this.data_music[x].name;
            newdiv3.appendChild(newa);
            var newa2=document.createElement("div");
            newa2.className="nombreartista";
            newdiv3.appendChild(newa2);
            var newspan=document.createElement("a");
            newspan.className="link_artista";
            newspan.setAttribute("href","./pages/artista.html");

            newspan.innerHTML=this.data_music[x].artists[0].name;
            newa2.appendChild(newspan);
        }
        
    }
    creardivs_regueton()
    {
        console.log(this.data_regueton);
        const cont_presentacion=document.getElementsByClassName("contenedor_poster_artista")[1];
        for(let x=0;x<this.data_regueton.length;x++)
        {
            var newdiv=document.createElement("div");
            newdiv.className="contposter";
            cont_presentacion.appendChild(newdiv);
            var newdiv2=document.createElement("a");
            newdiv2.className="poster";
            newdiv2.setAttribute("href","./pages/track.html")
            newdiv2.style.backgroundImage="url("+this.data_regueton[x].track.album.images[0].url+")"
            newdiv.appendChild(newdiv2);
            var newdiv10=document.createElement("div");
            newdiv10.innerHTML="Reproducir";
            newdiv2.appendChild(newdiv10);
            var newdiv3=document.createElement("div");
            newdiv3.className="cont_desc_musica";
            newdiv.appendChild(newdiv3);
            var newa=document.createElement("a");
            newa.className="nombrecancion";
            newa.innerHTML=this.data_regueton[x].track.name;
            newdiv3.appendChild(newa);
            var newa2=document.createElement("div");
            newa2.className="nombreartista";
            newdiv3.appendChild(newa2);
            var newspan=document.createElement("a");
            newspan.className="link_artista";
            newspan.setAttribute("href","./pages/artista.html");
            newspan.innerHTML=this.data_regueton[x].track.artists[0].name;
            newa2.appendChild(newspan);
        }
        
    }
    creardivs_x()
    {
        console.log(this.data_x);
        const cont_presentacion=document.getElementsByClassName("contenedor_poster_artista")[2];
        for(let x=0;x<this.data_x.length;x++)
        {
            var newdiv=document.createElement("div");
            newdiv.className="contposter";
            cont_presentacion.appendChild(newdiv);
            var newdiv2=document.createElement("a");
            newdiv2.className="poster";
            newdiv2.setAttribute("href","./pages/track.html")
            newdiv2.style.backgroundImage="url("+this.data_x[x].track.album.images[0].url+")"
            newdiv.appendChild(newdiv2);
            var newdiv10=document.createElement("div");
            newdiv10.innerHTML="Reproducir";
            newdiv2.appendChild(newdiv10);
            var newdiv3=document.createElement("div");
            newdiv3.className="cont_desc_musica";
            newdiv.appendChild(newdiv3);
            var newa=document.createElement("a");
            newa.className="nombrecancion";
            newa.innerHTML=this.data_x[x].track.name;
            newdiv3.appendChild(newa);
            var newa2=document.createElement("div");
            newa2.className="nombreartista";
            newdiv3.appendChild(newa2);
            var newspan=document.createElement("a");
            newspan.className="link_artista";
            newspan.setAttribute("href","./pages/artista.html");
            newspan.innerHTML=this.data_x[x].track.artists[0].name;
            newa2.appendChild(newspan);
        }
        
    }
    click_flechaderecha(e)
    {
        const flecha=document.getElementsByClassName("flecha_derecha");
        const cont=document.getElementsByClassName("contenedor_poster_artista");
        for(var x=0;x<flecha.length;x++)
        {
        if(e.target==flecha[x])
        {
            cont_slider[x]=cont_slider[x]-100;
            if(cont_slider[x]>=-400)
            {
            cont[x].style.transform="translateX("+cont_slider[x]+"%)";
            }
            else
            {
                cont_slider[x]=-400;
            }
        }
        }
    }
    click_flechaizquierda(e)
    {
        const flecha=document.getElementsByClassName("flecha_izquierda");
        const cont=document.getElementsByClassName("contenedor_poster_artista");
        for(var x=0;x<flecha.length;x++)
        {
        if(e.target==flecha[x])
        {
            cont_slider[x]=cont_slider[x]+100;

            if(cont_slider[x]<=0)
            {
            cont[x].style.transform="translateX("+cont_slider[x]+"%)";
            }
            else
            {
            cont_slider[x]=0;
            }
        }
        }

    }
    click_poster(e)
    {
        const post=document.getElementsByClassName("poster");

        for(var x=0;x<post.length;x++)
        {

            if(e.target==post[x].firstElementChild)
            {
                let i=x;

                if(i<20)
                {
                    if(data_music[x].album_type=="album")
                    {
                   var data={"albumid":data_music[x].id,"image":data_music[x].images[0].url,"name":data_music[x].name,"href":data_music[x].href,"type":data_music[x].type,"date":data_music[x].release_date,"artists":data_music[x].artists[0].name};
                   localStorage.setItem("albumid",JSON.stringify(data));
                   
                    }
                    else if(data_music[x].album_type=="single")
                    {
                   var data={"uri":data_music[x].uri,"trackid":data_music[x].id,"image":data_music[x].images[0].url,"name":data_music[x].name,"href":data_music[x].href,"type":data_music[x].album_type,"date":data_music[x].release_date,"artists":data_music[x].artists[0].name};
                   localStorage.setItem("trackid",JSON.stringify(data));
                   
                    }

                }
                else if(i<40)
                {
                   var data={"uri":data_regueton[x-20].track.uri,"trackid":data_regueton[x-20].track.id,"image":data_regueton[x-20].track.album.images[0].url,"name":data_regueton[x-20].track.name,"href":data_regueton[x-20].track.album.href,"type":data_regueton[x-20].track.album.album_type,"date":data_regueton[x-20].track.album.release_date,"artists":data_regueton[x-20].track.album.artists[0].name};
                   localStorage.setItem("trackid",JSON.stringify(data));
                   console.log(data);
                }
                else if(i<60)
                {
                   var data={"uri":data_x[x-40].track.uri,"trackid":data_x[x-40].track.id,"image":data_x[x-40].track.album.images[0].url,"name":data_x[x-40].track.name,"href":data_x[x-40].track.album.href,"type":data_x[x-40].track.album.album_type,"date":data_x[x-40].track.album.release_date,"artists":data_x[x-40].track.album.artists[0].name};
                   localStorage.setItem("trackid",JSON.stringify(data));
                   console.log(data);
                }
            }
        }
    }
    click_artista(e)
    {
        const artista=document.getElementsByClassName("link_artista");
        
        for(var x=0;x<artista.length;x++)
        {
            if(e.target==artista[x])
            {
                if(x<20)
                {
                const data=data_music[x].artists[0];
                localStorage.setItem("artistaid",JSON.stringify(data));
                }
                else if(x<40)
                {
                const data=data_regueton[x-20].track.artists[0];
                localStorage.setItem("artistaid",JSON.stringify(data));
                }
                else if(x<60)
                {
                const data=data_x[x-40].track.artists[0];
                localStorage.setItem("artistaid",JSON.stringify(data));
                }
                     
            }
        }
    }

}
