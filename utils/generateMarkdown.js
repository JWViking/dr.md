// TODO: Create a function that returns a license badge based on which license is passed in
const addBadge = (data) => {
  return `![License Badge](https://img.shields.io/badge/license-${data.license}-orange.svg)`
};


// TODO: Create a function to generate markdown for README
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
