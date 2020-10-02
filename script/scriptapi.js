class ScriptApi
{
    
obtener_token()
{
    let promesa;
    if(localStorage.getItem("data")&&localStorage.getItem("Expire"))
    {
       
        
           let hora_actual=new Date();
           let expire= new Date(localStorage.getItem("Expire"));
           if(hora_actual.getTime()<expire.getTime())
           {
           promesa=JSON.parse(localStorage.getItem("data")); 
           console.log("aun no vence");
           }
           else
           {
            console.log("vencio token");
            localStorage.removeItem("data");
            localStorage.removeItem("Expire");
            promesa="NN";
               
           }
    }
    else
    {
    const param="grant_type=client_credentials&client_id=04bc52940f8a4767800251a7a146754e&client_secret=c896a7b26ccb4978bf50f57a3200c88f";
    const xhr=new XMLHttpRequest();
    xhr.open("POST","https://accounts.spotify.com/api/token");
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhr.send(param);
    promesa=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            let hora_actual=new Date();
            
            hora_actual.setMinutes(hora_actual.getMinutes()+50);
            localStorage.setItem("Expire",hora_actual);
            
            const response=JSON.parse(xhr.responseText);
            localStorage.setItem("data",JSON.stringify(response));
             resolve(response);
        }
        
    }
    });
    }
    return promesa;
}
obtener_newreleases(token)
{
    let promesa;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/browse/new-releases");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==401){
            resolve(401);
        }
        else if(xhr.status==200&&xhr.readyState==4)
        {
            const load=document.getElementsByClassName("loadimage")[0];
            load.style.display="none";
            const response=JSON.parse(xhr.responseText);
            resolve(response.albums.items);
        }
        
    }
    });
    return promesa;

}
obtener_playlist_regueton(token)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/playlists/37i9dQZF1DWZjqjZMudx9T/tracks?limit=20");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const load=document.getElementsByClassName("loadimage")[1];
            load.style.display="none";
            const response=JSON.parse(xhr.responseText);
            resolve(response.items);
        }
    }
    });
    return promesa2;
}
obtener_playlist_x(token)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/playlists/37i9dQZF1DWT5MrZnPU1zD/tracks?market=US&limit=20");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const load=document.getElementsByClassName("loadimage")[2];
            load.style.display="none";
            const response=JSON.parse(xhr.responseText);
            resolve(response.items);
        }
    }
    });
    return promesa2;
}
obtner_albums_x(token,albumid)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/albums/"+albumid+"/tracks?market=US&limit=15");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            resolve(response.items);
        }
    }
    });
    return promesa2;
}
obtener_track(token,trackid)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/tracks/"+trackid);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            resolve(response);
        }
    }
    });
    return promesa2;
}
obtener_toptrack(token,trackid)
{
    console.log(token);
    console.log(trackid);
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/artists/"+trackid+"/top-tracks?country=US");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            resolve(response);
        }
    }
    });
    return promesa2;
}
obtener_imagenartista(token,idartista)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/artists/"+idartista);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            if(response.images.length)
            {
            resolve(response.images[0].url);
            }
            else
            {
                var url_img="../images/original.png";
            resolve(url_img);
            }
        }
    }
    });
    return promesa2;
}
obtener_data_busqueda_artista(valor,token)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/search?q="+valor+"&type=artist&limit=10");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            
            resolve(response.artists.items);
        }
    }
    });
    return promesa2;
}
obtener_playlist(valor,token)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/playlists/"+valor+"/tracks?offset=0&limit=50&market=US");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            
            resolve(response.items);
        }
    }
    });
    return promesa2;
}
obtener_data_busqueda_track(valor,token)
{
    let promesa2;
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.spotify.com/v1/search?q="+valor+"&type=track&limit=20");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    promesa2=new Promise(resolve=>
   { 
    xhr.onreadystatechange=()=>
    {
        if(xhr.status==200&&xhr.readyState==4)
        {
            const response=JSON.parse(xhr.responseText);
            
            resolve(response.tracks.items);
        }
    }
    });
    return promesa2;
}

}

