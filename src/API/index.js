const cohortName = '2306-ftb-et-web-am';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const fetchPlayers = async() => {
    try {
        const response = await fetch(`${APIURL}players`);
        const players = response.json();
        return players;
    } catch (error) {
        console.log(error);
    }
}

export default fetchPlayers;