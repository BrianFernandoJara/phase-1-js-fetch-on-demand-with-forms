const init = () => {
  const inputForm = document.querySelector("form");
  const text = inputForm.querySelector("#searchByID")

    inputForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        
        fetch(`http://localhost:3000/movies/${text.value}`)
        .then(resp => resp.json())
        .then(data =>{
            const title = document.querySelector("#movieDetails h4");
            const summary = document.querySelector("#movieDetails p");

            title.innerHTML = data.title;
            summary.innerHTML = data.summary;
        })

        text.value = "";
    });
}

document.addEventListener('DOMContentLoaded', init);