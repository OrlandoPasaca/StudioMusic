class Buscador
{
    busca;
    texto;
    data_busqueda;
    presentacion;
    token;
    constructor(token)
    {
        this.texto="hola";
        this.token=token;
        this.busca=document.getElementById("buscador");
        this.busca.addEventListener("keyup",()=>this.escribiendo());
    }
    async escribiendo()
    {
        const valor=this.busca.value;
        this.presentacion=new ScriptApi();
        this.data_busqueda=await this.presentacion.obtener_data_busqueda_artista(valor,this.token);
        console.log(this.data_busqueda);    
        this.creardivs_resbusc();
    }
    creardivs_resbusc()
    {
        const cont=document.getElementById("cont_res_buscador");
        while(cont.firstElementChild)
        {
            cont.removeChild(cont.firstElementChild);
        }
        for(var x=0;x<this.data_busqueda.length;x++)
        {
            var newa=document.createElement("a");
            newa.className="res_buscador";
            newa.addEventListener("click",e=>this.guardar_id(e));
            newa.setAttribute("href","./pages/artista.html");
            newa.innerHTML=this.data_busqueda[x].name;
            
            cont.appendChild(newa)

        }
    }
    guardar_id(e)
    {
        const res=document.getElementsByClassName("res_buscador");
        for(var x=0;x<res.length;x++)
        {
            if(e.target==res[x])
            {
                localStorage.setItem("artistaid",JSON.stringify(this.data_busqueda[x]));
            }
        }
    }

}