class Search
{
    input;
    valor;
    token;
    data_track;
    data_img;
    data_nombre;
    cont_musica=document.getElementById("cont_musica");
    constructor(token)
    {
        this.token=token;
        console.log(token);
        this.cont_musica=document.getElementById("cont_musica");
        this.input=document.getElementById("search");
        this.input.addEventListener("keyup",()=>this.capturarvalor());
    }
    async capturarvalor()
    {
        while(cont_musica.firstElementChild)
        {
            cont_musica.removeChild(cont_musica.firstElementChild);
        }
        this.valor=this.input.value;
        const scriptapi=new ScriptApi();
        this.data_track=await scriptapi.obtener_data_busqueda_track(this.valor,this.token);
        this.data_img=this.data_track.map(e=>e.album.images[0].url);
        this.data_nombre=this.data_track.map(e=>e.name);
        this.creardivs_musica();
        console.log(this.data_track);
        
        
    }
    creardivs_musica()
    {
        
        while(cont_musica.firstElementChild)
        {
            cont_musica.removeChild(cont_musica.firstElementChild);
        }
        
        for(var x=0;x<this.data_img.length;x++)
        {
        
        let newdiv=document.createElement("div");
        newdiv.className="cont_musica";
        
        let newimage=document.createElement("div");
        newimage.className="img";
        newimage.style.backgroundImage="url("+this.data_img[x]+")";
        let newa2=document.createElement("a");
        newa2.className="link";
        newa2.setAttribute("href","./track.html");
        newa2.addEventListener("click",(e)=>this.guardar_data(e));
        let newa=document.createElement("a");
        newa.className="nombre";
        newa.innerHTML=this.data_nombre[x];
        cont_musica.appendChild(newdiv);
        newdiv.appendChild(newimage);
        newimage.appendChild(newa2);
        newdiv.appendChild(newa);

        }
        

    }
    guardar_data(e)
    {
        
        const link=document.getElementsByClassName("link");
        console.log(link[0]);
        for(var x=0;x<this.data_track.length;x++)
        {
        if(e.target==link[x])
        {
            
            let data={"artists":this.data_track[x].artists[0].name,"date":this.data_track[x].album.release_date,"href":this.data_track[x].album.href,"image":this.data_track[x].album.images[0].url,"name":this.data_track[x].name,"trackid":this.data_track[x].id,"type":this.data_track[x].album.album_type,"uri":this.data_track[x].uri};
            localStorage.setItem("trackid",JSON.stringify(data));
        }
        }
    }

    
    
}