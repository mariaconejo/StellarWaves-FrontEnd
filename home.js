

function prueba(data){
  const list = document.querySelector(".artist__list");
  for(let i = 0; i< data.length; i++){
    const html = `
      <div data-id="${data[i].id}" class="info__artist">
        <img src="${data[i].image}" alt="${data[i].name}">
        <h2>${data[i].name}</h2>
      </div>
      `
      list.innerHTML += html;
  }

  console.log(data)
}


  function clic(){
    document.querySelector(".artist__list").addEventListener('click', (event) => {
    const clic = ((event.target).parentNode);
    const idArtist = clic.getAttribute('data-id');
    console.log(idArtist);
    return idArtist;
  });

}

  clic()

async function route(){
  const artista = await clic() ,{
    () => {location.href = 'artist.html'; }
}


  }

route();








fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
      prueba(data);

});






console.log(clic)

export{clic}

