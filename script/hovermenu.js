let categorias=document.getElementById("categorias");
categorias.addEventListener("mouseover",apararecer);
categorias.addEventListener("mouseout",ocultar);
let cont_categorias=document.getElementById("cont_menu_cat");
cont_categorias.addEventListener("mouseover",apararecer);
cont_categorias.addEventListener("mouseout",ocultar);
let categoria=document.getElementsByClassName("link_categoria");
let nav=document.getElementsByTagName("nav");
nav[0].addEventListener("click",c);
function c()
{
}
for(var x=0;x<categoria.length;x++)
{
categoria[x].addEventListener("click",guardar_categoria,false);
}
function apararecer()
{
    cont_categorias.style.top="100%";
}
function ocultar()
{
    cont_categorias.style.top="-100%";
}
function guardar_categoria(e)
{
    if(e.currentTarget==categoria[0])
    {
        
        localStorage.setItem("categoria","37i9dQZF1DWZjqjZMudx9T");
        localStorage.setItem("genero","Reggaeton");
    }
    else if(e.currentTarget==categoria[1])
    {
        localStorage.setItem("categoria","37i9dQZF1DWYZ2zzgvJZul");
        localStorage.setItem("genero","Rock");
    }
    else if(e.currentTarget==categoria[2])
    {
        localStorage.setItem("categoria","37i9dQZF1DX0XUsuxWHRQd");
        localStorage.setItem("genero","Hip Hop");
    }
    else if(e.currentTarget==categoria[3])
    {
        localStorage.setItem("categoria","04Yx3q5s7MLF2yXKDulyVS");
        localStorage.setItem("genero","Salsa");
    }
    else if(e.currentTarget==categoria[4])
    {
        localStorage.setItem("categoria","37i9dQZF1DXe9hay4VT07f");
        localStorage.setItem("genero","Reggae");
    }
    else if(e.currentTarget==categoria[5])
    {
        localStorage.setItem("categoria","37i9dQZF1DWVqfgj8NZEp1");
        localStorage.setItem("genero","Jazz");
    }
}
