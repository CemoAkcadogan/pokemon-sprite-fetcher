# Pokemon List

This web page displays a list of Pokémon names along with their corresponding front default images. It utilizes the PokeAPI and Apollo Client to fetch the data and dynamically populate the list.

## Usage

1. Clone the repository or download the HTML file.
2. Open the HTML file in a web browser.
3. The Pokémon names and their front default images will be displayed in a list.

## Technologies Used

- HTML
- Apollo Client
- Axios
- PokeAPI

## How It Works

1. The Apollo Client is configured with the necessary network interface to communicate with the PokeAPI GraphQL endpoint.
2. The `GET_POKEMON_SPRITES_QUERY` is defined to fetch the Pokémon names and their sprite information, including the front default image URL.
3. The Apollo Client sends the query request to the PokeAPI GraphQL endpoint and retrieves the response.
4. The response data is processed, and for each Pokémon, a list item is created with the Pokémon name.
5. If the Pokémon has a front default image, an image element is created and appended to the list item.
6. The list items are appended to the `<ul>` element with the id "pokemonList", and the Pokémon names and images are displayed on the web page.

Feel free to explore and customize the code according to your needs.

# License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

You are free to use, modify, and distribute this project for any purpose. Please refer to the [LICENSE](LICENSE) file for more details.
