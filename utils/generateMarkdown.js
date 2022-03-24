//create a function that uses the data from the index.js as an argument to display a license
//badge determined by the user response in the data.license response.
const addBadge = (data) => {
  return `![License Badge](https://img.shields.io/badge/license-${data.license}-orange.svg)`
};


// Create a function that passes data as an argument and sets up the outline of the
//readme.md. Include a table of contents with links to the section headers.
function generateMarkdown(data) {
  return `# ${data.title}

  ${addBadge(data)}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution Guidelines](#contribution)
  5. [Test Instructions](#tests)
  6. [License](#license)
  7. [Contact Me](#contact-me-here-with-questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## License
  ${data.license}

  ## Contact Me Here With Questions
  Github: [${data.username}](https://github.com/${data.username})

  Email: ${data.email}  
`;
};

module.exports = generateMarkdown;
