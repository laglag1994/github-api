const gitSearchBtn = document.getElementById('search')
const gitSerachTerm=document.getElementById('search-term')
const gitMain=document.getElementById('main')





async function gitUser(name) {
        const data = await (await fetch("https://api.github.com/users/" + name)).json()
        console.log(data)
        gitInfo(data)


}


gitSearchBtn.addEventListener('click', (e) => {

    const username = gitSerachTerm.value

console.log(username)


        gitUser(username)

        gitSerachTerm.value = ''
    
})



function gitInfo(data) {
    gitMain.innerHTML=''
    const user=document.createElement('div')
    user.classList.add('user')
    
    user.innerHTML= `
        
            <div class="picture">
                <img
                 src="${data.avatar_url}"
                 alt="${data.login}"
                 />
                <h1> ${data.login}</h1>
            </div>


            <div class="bio" >
                <p>${data.bio}.</p>
             </div>

    `

    gitMain.append(user)
}


