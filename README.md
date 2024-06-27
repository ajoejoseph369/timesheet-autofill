Timesheet Automation Script

##Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/ajoejoseph369/timesheet.git
   
2. Install necessary dependencies by running the following commands in your IDE.
   ```bash
   sudo apt install -y nodejs
   ```
   
   ```bash
   npm install
   ```
   
   ```bash   
   npm install --save-dev @wdio/cli @wdio/local-runner @wdio/cucumber-framework @wdio/spec-reporter @wdio/sync webdriverio chromedriver
   ```
   
   ```bash
   npm install typescript@latest ts-node@latest
   ```

3. Open the wdio.conf.js file:
   
   3.1 Search for 'global.username' and replace the <your_email> tag with your email

   3.2 Replace <your_password> with your password 

   3.3 Replace <your_team> with your team name in the format given.


5. Run the following command to execute the script
   ```bash
   npm run wdio -- --activity="GEN - Internal Training" --date="26-06-2024 10:00:00"

#NOTE: Replace activity type and date accordingly.

#NOTE: The format should be the same.

