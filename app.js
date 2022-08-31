const loadData = (search) => {
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayItem(data.meals))
}
const displayItem = (allData) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  allData.forEach(data => {
    const { strMealThumb,strYoutube,strMeal,strInstructions } = data;
  
    const creatDiv = document.createElement('div');
    creatDiv.classList.add('border','rounded')
    creatDiv.innerHTML = `
    <a href="${strYoutube}" target=_blank data-mdb-ripple="true" data-mdb-ripple-color="light">
    <img class="rounded-t-lg" src="${strMealThumb}" alt=""/>
  </a>
  <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2">${strMeal}</h5>
    <p class="text-gray-700 text-base mb-4">${strInstructions.slice(0, 200)}
    </p>
    <button onclick="loadDatas(${data.idMeal})" type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
    `
    cardContainer.appendChild(creatDiv)
    
  });

}
const loadDatas = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  fetch(url)
  .then(res => res.json())
  .then(data => secondLoad(data.meals[0]))
}
const secondLoad = (value) => {
  const { strMealThumb, strYoutube, strMeal, strInstructions } = value;
  
  const cardContainer = document.getElementById('single-card');
  cardContainer.innerHTML = `
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
  <a href="${strYoutube}" target="blank">
    <img class="rounded-t-lg" src="${strMealThumb}" alt=""/>
  </a>
  <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2">${strMeal}</h5>
    <p class="text-gray-700 text-base mb-4">${strInstructions.slice(0,180) }
    </p>
  </div>
</div>
  `

}
document.getElementById('button-addon2').addEventListener('click', function () {
  const searchText = document.getElementById('search-field');
  const getText = searchText.value;
  if (getText === "") {
    alert('please insert a food name');
  
  } 

  searchText.value = '';
  // console.log(getText);
  loadData(getText)
})

loadData('fish');