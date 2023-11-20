// returns a license badge based on which license is passed in
// If there is no license, return empty 
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// returns the license link
// If there is no license, return empty
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`;
  }
  return '';
}

// returns the license section of README
// If there is no license, return empty 
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, you can reach me at ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.github}) for more projects.
`;
}

module.exports = generateMarkdown;