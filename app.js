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
        name: 'Wayne barret',
        role: 'Founder & CEO',
        image: 'wayne-barnet-founder-ceo.jpg'
    }
];

// console.log(team)

//   collega l'array alla classe team
const teamDom = document.querySelector('.team')

//stampiamo gli oggetti nella console

for ( let i = 0; i < team.length; i++) {
    console.log(team[i][name],team[i][role], team[i][image])

    //creiamo anche una funzione
    showTeamMembers(team[i])

}

// stampiamo il tutto nell'html

// function showTeamMembers(teamMembers) {
    




// }