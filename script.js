const gitForm = document.getElementById('form')
const gitSearch = document.getElementById('search')



gitUser();
gitInfo();



async function gitUser(name) {
    try{
        const data = await fetch("https://api.github.com/users/" + name)
        
        gitInfo(await data.json())


    }catch (error){
        if(error.response.status==404)
        gitErr('username not found')
    }


}


function gitInfo(data) {
    
    
    const user = document.createElement('div')
    user.classList.add('user')
    user.innerHTML = `

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
    console.log(data)
}



function gitErr(errMsg){
    errMsg.innerHTML=`<h2>${errMsg}</h3>`
}







form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = gitSearch.value

    if (user) {
        gitUser(user)

        gitSearch.value = ''
    }
})
