const cohortName = "2306-ftb-et-web-am";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}players`);
    const players = response.json();
    return players;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${APIURL}players/${id}`);
    const player = await response.json();
    return player;
  } catch (error) {
    console.error(error);
  }
};

export const createPlayer = async (name, breed) => {
  try {
    const response = await fetch(`${APIURL}players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deletePlayer = async(id) => {
    try {
        const response = await fetch(`${APIURL}players/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}