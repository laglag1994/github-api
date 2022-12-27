const main = document.getElementById('main')
const gitForm = document.getElementById('form')
const gitSearch = document.getElementById('search')



gitUser();
gitInfo();
async function gitUser(name) {

    try {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + name)

        gitInfo(data)

    } catch {
        if (err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }


}

const data = undefined;

function gitInfo(data) {
    
    
    const user = document.createElement('div')
    user.classList.add('user')
    user.innerHTML = `
        <div>
            <div class="picture">
                <img
                 src="${data.avatar_url}"
                 alt="${data.login}"
                 />

                <h1 ${data.login}</h1>
            </div>


            <div class="bio" id="bio">
                <p>${data.bio}.</p>
             </div>
        </div>

    `
    console.log(user)
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        gitUser(user)

        search.value = ''
    }
})
