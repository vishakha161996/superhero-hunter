// Get Items that are stored in Local Storage 
//  I'll Get Items through ID (Bacause all have different Id's)
var resultId = localStorage.getItem('id');
// Fetch Will be done!
fetch();
// Get all the data from Fetch 
function fetch(){
    var Request = new XMLHttpRequest();
    // By Using Result Id, I will fetch agian with API 
    var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?ts=1&apikey=ab55beddcaf463b34b92f04e2661c61a&hash=264cee462727125011322be368e077e0`;
    Request.open('get',url,true);
    Request.send();
    Request.onload = function(){
        var response = JSON.parse(Request.response);
        // Print all the Resoponses in the format of JSON
        console.log(response);
        // According to all Id's i will get elemets and change its inner HTML by the Responses
            document.getElementById("thumbnail").innerHTML = '<img src="' + response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension + '" style="height:auto;width:100%;padding-bottom:20px;" class="mx-auto d-block"/>';
            document.getElementById("name").innerHTML = '<b>Name: </b> ' + response.data.results[0].name;
            document.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + response.data.results[0].id ;
            document.getElementById("desc").innerHTML = '<b>Description: </b> ' + response.data.results[0].description ;
            document.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ response.data.results[0].comics.available ;
            document.getElementById("series").innerHTML = '<b>Series Available: </b>'+ response.data.results[0].series.available ;
            document.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ response.data.results[0].stories.available ;
            document.getElementById("count").innerHTML = '<b>Count: </b>'+ response.data.count ;
            document.getElementById("modified").innerHTML = '<b>Modified: </b>'+ response.data.results[0].modified;
            document.getElementById("status").innerHTML = '<b>Status: </b>'+ response.status;
            document.getElementById("total").innerHTML = '<b>Total: </b>'+ response.data.total;
            document.getElementById("limit").innerHTML = '<b>Limit: </b>'+ response.data.limit;
            document.getElementById("offset").innerHTML = '<b>Offset: </b>'+ response.data.offset;
            document.getElementById("code").innerHTML = '<b>Code: </b>'+ response.code;
            
    }
}

/*
let comicList = response.data.results[0].comics;
document.getElementById("comic-available").innerHTML = '<b>Comic Available: </b>' + comicList.available;
// Displaying comics
let comicsContainer = document.getElementById("comics-list");
comicsContainer.innerHTML = ""; // Clearing previous content
response.data.results[0].comics.items.forEach(item => {
let comicElement = document.createElement("div");
comicElement.innerHTML = `<p><b>Name:</b> ${item.name}</p>
                <p><b>Resource URI:</b> ${item.resourceURI}</p>`;
comicsContainer.appendChild(comicElement);
});*/