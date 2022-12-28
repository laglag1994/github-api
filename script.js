const gitForm = document.getElementById('form')
const gitSearch = document.getElementById('search')
const gitCard=document.getElementById('card')



gitUser();
gitInfo();



async function gitUser(name) {
        const data = await fetch("https://api.github.com/users/" + name)
        
        gitInfo(await data.json())

}



function gitInfo(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="picture" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                
            </div>
        </div>
    `;

    gitCard.innerHTML = cardHTML;
}


function gitInfo(data) {
    
    
    const user = document.createElement('div')
    user.classList.add('card')
    gitCard=user.innerHTML = `

            <div class="picture">
                <img
                 src="${data.avatar_url}"
                 alt="${data.login}"
                 />
                <h1 ${data.login}</h1>
            </div>


            <div class="bio" >
                <p>${data.bio}.</p>
             </div>

    `
    console.log(gitCard)
}



// function gitErr(errMsg){
//     errMsg.innerHTML=`<h2>${errMsg}</h3>`
// }







form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = gitSearch.value

    if (user) {
        gitUser(user)

        gitSearch.value = ''
    }
})
