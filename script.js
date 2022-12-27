const gitName= document.getElementById('name');
const gitPic=document.getElementById('pic');
const gitBio=document.getElementById('bio');
const gitBtnSearch=document.getElementById('search');
const gitSearchTerm=document.getElementById('search-term')


async function fetchMealById(gitSearchTerm) {
    const idResp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + gitSearchTerm);
    const idname = await idResp.json();
    const name = idname.meals[0]
    return name

    alert(name)

}