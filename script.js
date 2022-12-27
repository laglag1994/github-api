const gitName= document.getElementById('name');
const gitPic=document.getElementById('pic');
const gitBio=document.getElementById('bio');



async function fetchUserName(id){
    const idResp=await fetch("https://api.github.com/users/%7Buser%7D" +id)
    const idName= await idResp.json();
    const name=idName.id;
    console.log(name)
}