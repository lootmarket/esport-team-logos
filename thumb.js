const fs = require('fs');
const path = require("path");
const sharp = require('sharp');

// passed arguments
const args = process.argv.slice(2);
let argumentPath = args[0];

const sizes = [320, 128, 32];

console.log(argumentPath);

// check passed argumentPath (file, or folder?)
fs.lstat(argumentPath, (err, stats) => {
    if (err) return console.log(err); //Handle error

    console.log(`Is file: ${stats.isFile()}`);
    console.log(`Is directory: ${stats.isDirectory()}`);

	if (stats.isFile()) return createThumbnails(argumentPath);
	if (stats.isDirectory()) return createThumbnailsFromFolder(argumentPath);
});

function createThumbnails (argumentPath) {
	let image = sharp(argumentPath);

	// assuming all images are -logo.png...
	const newPath = argumentPath.slice(0, -9);

	sizes.forEach(function(size) {
		image.resize(size, size)
			.max()
			.withoutEnlargement()
			.toFile(`${newPath}-${size}.png`);
	});
}

function createThumbnailsFromFolder (argumentPath) {
	fs.readdir(argumentPath, function(err, files) {
		if (err) return console.log(err); //Handle error

		files.forEach(function(file, index) {
			const filePath = path.join(argumentPath, file);
			fs.stat(filePath, (err, stats) => {
				if (err) return console.log(err); //Handle error

				if (stats.isFile() && filePath.includes('-logo.png')) {
					return createThumbnails(filePath);
				}

				if (stats.isDirectory()) return createThumbnailsFromFolder(filePath);
			});
		});
	});
}
