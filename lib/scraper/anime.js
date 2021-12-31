const axios = require('axios')
const cheerio = require('cheerio')

const anime = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
			.then(({
				data
			}) => {
				const hasil = []
				const $ = cheerio.load(data)
				$('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        result = {
                          status: 200,
                        	creator: creator,
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: 'https://www.anime-planet.com' + $(b).find('> a > div.crop > img').attr('src')
};
                        hasil.push(result);
                    });
				resolve(hasil)
			})
			.catch(reject)
	})
}

module.exports.anime = anime