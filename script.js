const res = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
res
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
        console.log(data1[i]);
        const gallery = document.createElement("div");
      gallery.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
         <div class="col">
           <div class="card">
           <div class="card-header">${data1[i].id}</div>
             <img src="${data1[i].url}" class="card-img-top" alt="Cat-images">
            </div>
          </div>
     </div>`;
      document.body.appendChild(gallery);
        
    }
});