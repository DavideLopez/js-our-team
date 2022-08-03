console.log('js-our-team')

// creiamo un array per gli oggetti
const team = [
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    }
];

console.log(team[5].name)

//   collega l'array alla classe team
const teamDom = document.querySelector('.team')

 //stampiamo gli oggetti nella console

for ( let i = 0; i < team.length; i++) {
    console.log(team[i].name, team[i].role, team[i].image)

    //creiamo anche una funzione
    showTeamMembers(team[i])

}



// stampiamo il tutto nell'html

function showTeamMembers(teamMembers) {
    //   creiamo i singoli elementi
    const card = document.createElement('div')
    card.classList.add('card')
    //ora la img
    const img = document.createElement('img')
    img.src = `./img/${teamMembers.image}`
      // ora generiamo il nome visibile
    const h1 = document.createElement('h1')
    h1.innerHTML= teamMembers.name
    // ora generiamo il ruolo visibile
    const h2 = document.createElement('h2')
    h2.innerHTML = teamMembers.role
      // appendiamo gli elementi generati alla card
    card.append(img)
    card.append(h1)
    card.append(h2)
    teamDom.append(card)

}