const APIURL = 'https://api.github.com/users/'
const gitName= document.getElementById('name');
const gitPic=document.getElementById('pic');
const gitBio=document.getElementById('bio');
const gitBtnSearch=document.getElementById('search');
const gitSearchTerm=document.getElementById('search-term')
const gitForm=document.getElementById("user-form")



gitUser();
gitInfo();
async function gitUser(name) {

    try{
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + name)

        gitInfo(data)
        
    }catch{
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }


}

function gitInfo(data){
    const user =document.createElement('div')
    user.classList.add('meal')
    user.innerHTML=`
    <div>

            <div class="picture">
                <img src="${data.avatar_url}">

                <h1 ${data.login}</h1>
            </div>


            <div class="bio" id="bio">
                <p>${data.bio}.</p>
            

        </div>
    `
console.log(data)
}