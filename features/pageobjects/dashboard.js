const { $ } = require('@wdio/globals');
const {Key} = require('webdriverio');

const Projects = '//*[@data-module-name="Projects"]';
const Timesheet = '//a[@class="link-content" and @href="#List/Timesheet"]';
const Newbtn = '//*[@data-label="New"]';
const activityTypeClicker = '//div[contains(@class,"error bold") and @data-fieldname="activity_type"]'
const activityType = '//input[@data-fieldname="activity_type"]';
const timeInput = '//input[@data-fieldtype="Datetime"]';
const hours = '//input[@data-fieldname="hours"]';
const project = '//input[@data-fieldname="project"]';
const saveBtn = '//button[span[@data-label="Save"]]';
const ProjectDropDown = "//input[@data-fieldname='project']/following-sibling::ul[starts-with(@id, 'awesomplete_list_')]";

class Dashboard{
    async goToProjects(){
        await $(Projects).click();
    }

    async goToTimesheet(){
        await $(Timesheet).click();
    }

    async createNew(activity,date,team){
        console.log('Activity: ',activity," Date: ",date," Team: ",team);
        await $(Newbtn).click();

        await $(activityTypeClicker).click();

        await $(activityType).click();
        for(const char of activity){
            await browser.keys(char);
        }
        await browser.pause(2000);
        await browser.keys([Key.Enter]);

        await $(timeInput).click();
        await browser.pause(1500);
        for(const char of date){
            await browser.keys(char);
        }
        await browser.pause(2000);
        await browser.keys([Key.Enter]);


        await $(hours).setValue("8");
        await browser.pause(2000);


        await $(project).click();
        await $(ProjectDropDown).waitForDisplayed({timeout:5000});
        for(const char of team){
            await browser.keys(char);
        }
        await browser.pause(2500);
        await browser.keys([Key.Enter]);
        await browser.pause(2000);

        await $(saveBtn).click();

        await browser.pause(4500);
    }
}

module.exports = new Dashboard();