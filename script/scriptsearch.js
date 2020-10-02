let data_track;
let token;
function declaration()
{
    token=JSON.parse(localStorage.getItem("data")).access_token;
    new Search(token);

}
window.addEventListener("load",declaration);