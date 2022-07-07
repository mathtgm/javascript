const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';

const imgItem = document.getElementById('imgCat');
const btnCat = document.getElementById('btnCat');

const getCats = async () => {

    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json[0];
    } catch (error) {
        console.log(error);
    }
    
}

const loadImg = async () => {
    const cat = await getCats();
    imgCat.src = cat.url;
    imgCat.alt = cat.id;
}

btnCat.addEventListener('click', loadImg);
loadImg();


