const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
    console.log('QuranVerseBot is online!');
});

client.on('messageCreate', async message => {
    if (message.content === '!verse') {
        try {
            const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
            // Assuming we know there are 114 Surahs
            const surahNumber = Math.floor(Math.random() * 114) + 1; // Surahs are 1-indexed

            // First, fetch the number of Ayahs in the selected Surah
            const responseMeta = await fetch(`http://api.alquran.cloud/v1/surah/${surahNumber}`);
            const metaData = await responseMeta.json();
            const ayahCount = metaData.data.numberOfAyahs;

            // Now select a random Ayah within this Surah
            const ayahNumber = Math.floor(Math.random() * ayahCount) + 1;

            // Fetch the translated verse
            const responseTranslation = await fetch(`http://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/en.asad`);
            const dataTranslation = await responseTranslation.json();
            const translationText = dataTranslation.data.text;

            // Fetch the Arabic verse
            const responseArabic = await fetch(`http://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}`);
            const dataArabic = await responseArabic.json();
            const arabicText = dataArabic.data.text;

            // Send the formatted message with both Arabic and translation
            message.channel.send(`
**Verse of the Day:** ${arabicText}
**Translation:** ${translationText}
**Surah it is used in:** ${metaData.data.englishName} (${metaData.data.englishNameTranslation})
**Ayah it is used in:** ${ayahNumber}
`);
        } catch (error) {
            console.error('Error fetching verse:', error);
            message.channel.send('Sorry, there was an error fetching the verse.');
        }
    }
});

client.login(process.env.DISCORD_TOKEN);

