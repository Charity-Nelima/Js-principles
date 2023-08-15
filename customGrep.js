const fs = require('fs');
const path = require('path');

// Get the regular expression and files/directories to search from command line arguments
const regex = new RegExp(process.argv[2]);
const searchPaths = process.argv.slice(3);

// Function to recursively search through directories
function searchDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directoryPath}:`, err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for ${filePath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          searchDirectory(filePath); // Recurse into subdirectories
        } else if (stats.isFile()) {
          searchFile(filePath);
        }
      });
    });
  });
}

// Function to search a file for the given regular expression
function searchFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    if (regex.test(content)) {
      console.log(filePath);
    }
  });
}

// Start searching through the provided paths
searchPaths.forEach(searchPath => {
  fs.stat(searchPath, (err, stats) => {
    if (err) {
      console.error(`Error getting stats for ${searchPath}:`, err);
      return;
    }

    if (stats.isDirectory()) {
      searchDirectory(searchPath);
    } else if (stats.isFile()) {
      searchFile(searchPath);
    }
  });
});
