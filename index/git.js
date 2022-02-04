const APIURL = 'https://api.github.com/users/';

const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');
const main3 = document.getElementById('main3');
const form = document.getElementById('form');
const search = document.getElementById('search');

const people = [];
people[0] = "riulwoo";
people[1] = "ycs-202007021";
people[2] = "ycs-202007072";

getUser(people);

async function getUser(username){
    for(var i=0; i < username.length; i++)
    {
    const resp = await fetch(APIURL + username[i]);
    const respData = await resp.json();

    createUserCard(respData, i);

    getRepos(username[i], i);
    }
}

function createUserCard(user, idx){
    const cardHTML = `
    <div class="card">
        <div class = "ava">
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="info">
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id="repos ${idx}"></ul>
        </div>
    </div>
    `;
    switch(idx)
    {
        case 0:
            main1.innerHTML = cardHTML;
            break;
        case 1:
            main2.innerHTML = cardHTML;
            break;
        case 2:
            main3.innerHTML = cardHTML;
            break;
    }
}

async function getRepos(username, idx) {
    const resp = await fetch(APIURL + username + '/repos');
    const respData = await resp.json();

    addReposToCard(respData, idx);
}

function addReposToCard(repos, i) {
    const reposEl = document.getElementById("repos "+i);

    repos
        .sort((a,b) => a.stargazers_count - b.stargazers_count)
        .slice(0,10)
        .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');

        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
        })
}

form.addEventListener('submit',e => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);
        
        search.value = "";

    }
})