Timesheet Automation Script

##Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/ajoejoseph369/timesheet.git
   
2. Install necessary dependencies by running the following commands in your IDE.
   ```bash
   npm install
   npm install --save-dev @wdio/cli @wdio/local-runner @wdio/cucumber-framework @wdio/spec-reporter @wdio/sync webdriverio chromedriver
   npm install typescript@latest ts-node@latest

3. Run the following command to execute the script
   ```bash
   npm run wdio -- --username="<your_username>" --password="<your_password>" --activity="GEN - Internal Training" --date="26-06-2024 10:00:00" --team="AGT - Party Wolves"

#NOTE: Replace <your_username> and <your_password> with your own credentials.

#NOTE: Replace the date and team names accordingly. The format should be the same.

4. If the test fails, re-run the script.
