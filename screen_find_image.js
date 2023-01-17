const { screen, imageResource } = require('@nut-tree/nut-js');
require('@nut-tree/nl-matcher');

screen.config.resourceDirectory = __dirname;

(async () => {
	try {
		await screen.find( imageResource( 'icon.png' ) );
	}
	catch (err) {
		console.log( err );
	}
})();