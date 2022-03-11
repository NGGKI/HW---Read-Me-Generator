// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  return `# ${userResponses.title}

  ## About me

  ${userResponses.aboutme}

  ## Description

${userResponses.description}

  ## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Inquiries](#Inquiries)

* [License](#License)

## Installation

To install necessary dependencies, run the following command:

${userResponses.installation}

## Usage

${userResponses.usage}


## Contributing

${userResponses.contributing}

## Tests

${userResponses.tests}

## License

${userResponses.license}

## Inquiries


<img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />

For trouble shooting,please trouble yourself and drop me a message via :

Github: ${userInfo.html_url}

`};


module.exports = generateMarkdown;
