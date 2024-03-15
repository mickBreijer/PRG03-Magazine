window.addEventListener('load', init);

const apiUrl = 'http://localhost/PRG03-Magazine/Webservice';
let section;
let list;
let saveItems = [];
let detailPage;
let clubDetails = [];

function init()
{
    list = document.getElementById('content')
    list.addEventListener('click', ItemWasClicked)

    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(clubSuccesHandler)
        .then(pageSuccesHandler)
        .catch(ajaxErrorHandler)

    createDetailPagina()
}

//create detail pagina
function createDetailPagina(){
    const detailPageHolder = document.createElement('section')
    detailPageHolder.classList.add('detailPageHolder')
    detailPage = document.createElement('section')
    detailPage.classList.add('detailPage')
    detailPage.id = 'hide'

    let closeButton = document.createElement('button')
    closeButton.innerHTML = 'Lees minder'
    closeButton.classList.add('read2')

    document.body.appendChild(detailPageHolder)
    detailPageHolder.appendChild(detailPage)
    detailPage.appendChild(closeButton)
    detailPage.addEventListener('click', ItemWasClicked)
}

//create een section
function pageSuccesHandler(detail){
    for (let club of detail) {
        console.log(detail)
        const newDetailSection = document.createElement('section')
        newDetailSection.classList.add('contentBox')
        newDetailSection.dataset.name = club.name;
        list.appendChild(newDetailSection)

        fetch(apiUrl + '?id=' + club.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(infoSuccesHandler)
            .catch(ajaxErrorHandler);
    }
}

//laad en zet de detail data
function infoSuccesHandler(info) {
    console.log(clubDetails[info].name)
    const infoCard = document.getElementsByClassName('detailPage')[0]
    infoCard.innerHTML = ''

//Create top content
    let topContent = document.createElement('section')
    topContent.classList.add('innerTopInfoContentBox')
    infoCard.appendChild(topContent)
//Create close button
    let closeButton = document.createElement('button')
    closeButton.innerHTML = 'Lees minder'
    closeButton.classList.add('read2')
    topContent.appendChild(closeButton)
//Load club name
    let clubName = document.createElement('h1')
    clubName.innerHTML = clubDetails[info].name
    topContent.appendChild(clubName)
//Create left content
    let leftContent = document.createElement('section')
    leftContent.classList.add('innerInfoContentBox')
    infoCard.appendChild(leftContent)
//Load club logo
    let clubLogo = document.createElement('img')
    clubLogo.src = clubDetails[info].img
    clubLogo.alt = clubDetails[info].imgAlt
    clubLogo.classList.add('clubLogo')
    leftContent.appendChild(clubLogo)
//Create mid content
    let midContent = document.createElement('section')
    midContent.classList.add('innerInfoContentBox')
    infoCard.appendChild(midContent)
//Load club city
    let clubCity = document.createElement('h2')
    clubCity.innerHTML = clubDetails[info].city
    midContent.appendChild(clubCity)
//Load club stadium
    let clubStadium = document.createElement('h2')
    clubStadium.innerHTML = clubDetails[info].stadium
    midContent.appendChild(clubStadium)
//Load club founded
    let clubFounded = document.createElement('h2')
    clubFounded.innerHTML = clubDetails[info].founded
    midContent.appendChild(clubFounded)
//Load club division
    let clubDivision = document.createElement('h2')
    clubDivision
    .innerHTML = clubDetails[info].division
    midContent.appendChild(clubDivision)
//Load club manager
    let clubManager = document.createElement('h2')
    clubManager.innerHTML = clubDetails[info].manager
    midContent.appendChild(clubManager)
//Create right content
    let rightContent = document.createElement('section')
    rightContent.classList.add('innerInfoContentBox')
    infoCard.appendChild(rightContent)
//Load championships
    for (let i = 0; i < 7; i++) {
        let clubChampionship = document.createElement('tr')

        let clubChampionshipType = document.createElement('tt')
        clubChampionshipType.innerHTML = '<b>' + clubDetails[info].championshipType[i] + '</b>'

        let clubChampionshipAmount = document.createElement('td')
        clubChampionshipAmount.innerHTML = clubDetails[info].championshipAmount[i]

        clubChampionship.appendChild(clubChampionshipType)
        clubChampionship.appendChild(clubChampionshipAmount)

        rightContent.appendChild(clubChampionship)
    }
//Create bottom content
    let bottomContent = document.createElement('section')
    bottomContent.classList.add('innerBotInfoContentBox')
    infoCard.appendChild(bottomContent)
//Load club information
    let clubInfo = document.createElement('p')
    clubInfo.innerHTML = clubDetails[info].information
    bottomContent.appendChild(clubInfo)
//Load club accessibility info
    let clubAccessibility = document.createElement('p')
    clubAccessibility.innerHTML = clubDetails[info].accessibility
    bottomContent.appendChild(clubAccessibility)
}

//Create a section
function clubSuccesHandler(data){
    for (let club of data) {
        console.log(club)
        const newClubDiv = document.createElement('section')
        newClubDiv.classList.add('contentBox')
        newClubDiv.dataset.name = club.name;
        list.appendChild(newClubDiv)

        fetch(apiUrl + '?id=' + club.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(detailSuccesHandler)
            .catch(ajaxErrorHandler);
    }
}

//Load all detail data
function detailSuccesHandler(club) {
    console.log(club)
    let clubCard = document.querySelector(`.contentBox[data-name='${club.name}']`);
//Create left content
    let leftContent = document.createElement('section')
    leftContent.classList.add('innerContentBox')
    clubCard.appendChild(leftContent)
//Load Logo
    let logoImg = document.createElement('img')
    logoImg.src = club.img
    logoImg.alt = club.imgAlt
    logoImg.classList.add('clubLogo')
    leftContent.appendChild(logoImg)
//Create mid content
    let midContent = document.createElement('section')
    midContent.classList.add('innerContentBox')
    clubCard.appendChild(midContent)
//Load club name
    let title = document.createElement('h1');
    title.innerHTML = club.name;
    midContent.appendChild(title);
//Load link to club website
    let link = document.createElement('a')
    link.innerHTML = club.linktext
    link.href = club.link
    link.setAttribute('target', '_blank');
    midContent.appendChild(link);
//Load stadium adress
    let adress = document.createElement('h2')
    adress.innerHTML = club.adress
    midContent.appendChild(adress)
//Load club city
    let city = document.createElement('h2')
    city.innerHTML = club.city
    midContent.appendChild(city)
//Create right content
    let rightContent = document.createElement('section')
    rightContent.classList.add('innerContentBox')
    clubCard.appendChild(rightContent)
//Creat read button
    let readMoreButton = document.createElement('button')
    readMoreButton.innerHTML = 'Lees meer'
    readMoreButton.classList.add('read')
    readMoreButton.dataset.id = club.id;
    rightContent.appendChild(readMoreButton)
    clubDetails[club.id] = club
    console.log(club)
//Creat save button
    let saveButton = document.createElement('button')
    saveButton.innerHTML = 'save ' + club.name
    saveButton.id = club.name
    saveButton.classList.add('save')
    saveButton.classList.add('notSaved')
    rightContent.appendChild(saveButton)
//Save club info in clubDetails
    clubDetails[club.id] = club
    loadSaves(club.name)
}

//See if the club is saved
function loadSaves(clubName) {
    if(localStorage.getItem('savelist-club')){
        saveItems = JSON.parse(localStorage.getItem('savelist-club'));
        for (let i = 0; i < saveItems.length; i++){
            if(saveItems[i] === 'save ' + clubName){
                let button = document.getElementById(clubName)
                button.classList.add('saved')
                button.classList.remove('notSaved')
                button.innerHTML = button.innerHTML.replace('save', 'unsave');
            }
        }
    }
}

//Error handler
function ajaxErrorHandler(error){
    console.error(error)
}

//Click funtion
function ItemWasClicked(e) {
//save action
    if (e.target.classList.item(0) === 'save') {
        if (e.target.classList.item(1) === 'notSaved') {
            e.target.classList.add('saved')
            e.target.classList.remove('notSaved')
            console.log(e.target.innerHTML)
            saveItems.push(e.target.innerHTML)
            e.target.innerHTML = e.target.innerHTML.replace('save', 'unSave');
            localStorage.setItem('savelist-club', JSON.stringify(saveItems));
        } else if (e.target.classList.item(1) === 'saved') {
            e.target.classList.add('notSaved')
            e.target.classList.remove('saved')
            console.log(e.target.innerHTML)
            let remove = saveItems.indexOf(e.target.innerHTML.replace('unSave', 'save'))
            saveItems.splice(remove, 1)
            e.target.innerHTML = e.target.innerHTML.replace('unSave', 'save');
            localStorage.setItem('savelist-club', JSON.stringify(saveItems));
        }
    }

//Read function
    if (e.target.classList.item(0) === 'read') {
        if (detailPage.id === 'hide') {
            detailPage.id = 'show'
            document.body.classList.add('noscroll')
            infoSuccesHandler(e.target.dataset.id)
            console.log(e.target.dataset.id)
        } else if (detailPage.id === 'show') {
            detailPage.id = 'hide'
            document.body.classList.remove('noscroll')
        }
    }
    if (e.target.classList.item(0) === 'read2') {
        if (detailPage.id === 'hide') {
            detailPage.id = 'show'
            document.body.classList.add('noscroll')
            infoSuccesHandler(e.target.dataset.id)
            console.log(e.target.dataset.id)
        } else if (detailPage.id === 'show') {
            detailPage.id = 'hide'
            document.body.classList.remove('noscroll')
        }
    }
}