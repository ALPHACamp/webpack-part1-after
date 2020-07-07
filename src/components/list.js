import INFLUENCERS from '../static/influencers'
const cardList = document.getElementById('card-list')

export default {
  activeCard: 0,
  init: () => {
    // draw
    INFLUENCERS.forEach((influencer) => {
      cardList.innerHTML += `
          <div id="${influencer.name}-${influencer.id}" class="card ${
        influencer.id === this.activeCard + 1 ? 'active' : ''
      }">
          <div class="name">${influencer.name}</div>
          <div class="flex-row"><i class="fab fa-youtube"></i><span>${
            influencer.youtube
          }</span></div>
          <div class="flex-row"><i class="fab fa-facebook-square"></i><span>${
            influencer.fb
          }</span></div>
          <div class="flex-row"><i class="fab fa-instagram"></i><span>${
            influencer.ig
          }</span></div>
          </div>
       `
    })
    // init listener
    cardList.addEventListener('click', this.handleCardClicked)
  },
  handleCardClicked: ({ target }) => {
    const cards = cardList.querySelectorAll('.card')
    const node = target.closest('.card')
    const { activeCard } = this
    if (node) {
      const idArr = node.id.split('-')
      const num = Number(idArr[idArr.length - 1])
      cards[activeCard].classList.remove('active')
      cards[num - 1].classList.add('active')
      activeCard = num - 1
    }
  },
}
