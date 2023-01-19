import {Character} from "../Rick and Morty/Character";
const Characters = () => {
        const characters = [
            {
                id: 1,
                name: "Gobo",
                status:"Dead",
                species: "Alien",
                gender: "Male",
                image:"https://rickandmortyapi.com/api/character/avatar/147.jpeg"
            },
            {
                id: 2,
                name: "Hamurai",
                status:"Dead",
                species: "Alien",
                gender: "Male",
                image:"https://rickandmortyapi.com/api/character/avatar/154.jpeg"
            },
            {
                id: 3,
                name: "King Flippy Nips",
                status:"Alive",
                species: "Alien",
                gender: "Male",
                image:"https://rickandmortyapi.com/api/character/avatar/192.jpeg"
            },
            {
                id: 4,
                name: "Shmlamantha Shmlicelli",
                status:"Alive",
                species: "Human",
                gender: "Female",
                image:"https://rickandmortyapi.com/api/character/avatar/314.jpeg"
            },
            {
                id: 5,
                name: "Zick Zack",
                status:"Dead",
                species: "Alien",
                gender: "Male",
                image:"https://rickandmortyapi.com/api/character/avatar/390.jpeg"
            },
            {
                id: 6,
                name: "Snake with Legs",
                status:"Alive",
                species: "Animal",
                gender: "Male",
                image:"https://rickandmortyapi.com/api/character/avatar/579.jpeg"
            }
        ]
    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/> )
            }
        </div>
    )
}
export {Characters}

