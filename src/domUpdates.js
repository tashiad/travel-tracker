const welcomeText = document.querySelector("#welcome-text")
const cardGrid = document.querySelector(".card-grid")

const domUpdates = {

  addWelcomeMessage(firstName) {
    welcomeText.innerText = `Welcome ${firstName}! Here are your trips.`
  },

  // addCardToDom(recipeInfo, shortRecipeName) {
  //   const newRecipeCard = cardTemplate.content.cloneNode(true)
  //   newRecipeCard.querySelector('article.recipe--card').id = recipeInfo.id
  //   newRecipeCard.querySelector('h4.recipe--title').innerText = shortRecipeName
  //   newRecipeCard.querySelector('img.recipe--photo').src = recipeInfo.image
  //   newRecipeCard.querySelector('img.recipe--photo').alt = recipeInfo.name
  //   newRecipeCard.querySelector('img.recipe--photo').title = `${recipeInfo.name} recipe`
  //
  //   this.displayTags(recipeInfo.tags, newRecipeCard)
  //   recipeContainer.appendChild(newRecipeCard)
  // }
}

export default domUpdates
