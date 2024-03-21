# QuranVerseBot

QuranVerseBot is a Discord bot designed for the Muslims in Tech server. It aims to enhance Quranic knowledge by supplying a verse from the Quran each time a user calls upon it. This bot fetches and displays a random verse along with its translation, allowing users to explore the Quran in a more interactive and engaging way.

## Features

- **Random Verse Generation**: On command, the bot provides a random verse from the Quran, alongside its English translation.
- **Surah and Ayah Information**: Each verse is accompanied by its Surah name, translation, and Ayah number.

## Installation

To use QuranVerseBot in your server, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Create a `.env` file in the root directory and add your Discord bot token as `DISCORD_TOKEN=your_bot_token_here`.
4. Run the bot using `node index.js`.

## Usage

After adding QuranVerseBot to your Discord server, you can fetch a random Quranic verse by typing `!verse` in the text channel.

## Dependencies

- discord.js: A powerful library for interacting with the Discord API.
- node-fetch: A light-weight module that allows you to make HTTP requests in Node.js.

## Contributing

Contributions to QuranVerseBot are welcome! Feel free to fork the repository, make changes, and submit pull requests. If you encounter any issues or have suggestions, please open an issue in the repository.  Down below are potential features the bot could use:

## Future Features 

- Search Functionality **(priority)**
- !help command **(priority)**
- Make it that the bot automatically sends a verse daily in the islamic discussion channel **(priority)**
- Handpicked verses for better quality
- Context, bot could provide context alongside verses (will go well with the handpicked verses)

## License

QuranVerseBot is licensed under the MIT license. See the LICENSE file for more details.
