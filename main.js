function getProjects(){
    const urlGitHub = 'https://github.com/julianafontenelee/repos'
    var loadingelement = document.getElementById('loading')

    fetch(urlGitHub, {
    method: 'GET'
})

.then ((response) => response.json ())
.then ((response) => {
    loadingelement.style.display='none'
    console.log (response)
})
.catch ((e) => {
    console.log (e)
})
}

function showProjects(data){
    var listelement = document.getElementById('my-projects-list')

    for(let i=0; i < data.lenght; i++ )
        {
            let a = document.createElement("a")
            a.href = data [i] ['clone_url']
            a.target= '_blank'
            a.title = data[i]['description']
            let linktext= document.createTextNode(data[i] ['name'])
            a.appendChild(linktext)
            listelement.appendChild(a)

        }

}

getProjects()