const { screen, imageResource, useConsoleLogger, ConsoleLogLevel } = require('@nut-tree/nut-js');
require('@nut-tree/nl-matcher');

useConsoleLogger({ logLevel: ConsoleLogLevel.DEBUG });
screen.config.resourceDirectory = __dirname;

(async () => {
	try {
		await screen.find( imageResource( 'icon.png' ) );
	}
	catch (err) {
		console.log( err );
	}
})();