// loadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
}
// displayCategories categories
const displayCategories = (categories) => {
    const buttonContainer = document.getElementById("button-container");
categories.forEach((item) => {
    console.log(item);
    // create a button
    const button = document.createElement("button");
    button.classList= "btn";
    button.innerText = item.category;
    buttonContainer.append(button);
})
}
loadCategories();