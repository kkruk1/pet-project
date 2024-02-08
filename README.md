# pet-project

This is an example project to give a high level presentation of how I use Playwrgiht in my tests.
Note that in this project especially, I rather don't spend too much time on figuring complicated CSS selectors if I don't have to (example pages provide usually a lot of attributes to interract with), however, I come from Selenium v3 and know how to write the bulletproof ones. My favourite convention is the Type-Attribute-Value eg. 'button[name="Login"]' or 'div[class^="elementClassPrefix"] > p:nth-child(2)' and so on. I know the advantages and disadvantages of xpaths, css selectors and ids in practice.
In the current Playwright project I work with, I use the Page Object Model, but I also enjoy working with fixures as more modern and recommended (at least by Playwright team) design pattern. I know how to compose a Dockerfie and build an image when it's needed ( I have Python-Selenium-Allure background), and configure a pipeline.
To genereate baseline screenshots on macOS locally, you'll need to start a linux docker container by running make bash, npm install then
npx playwright test <test path or grep> --update-snapshots
it will generate snapshots with names accordingly to the linux system as it will be running in CI.

Due to this being a demo project, I commit all code directly to the main branch, not feature/develop.
