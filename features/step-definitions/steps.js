const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const Page = require('../pageobjects/page.js');
const Dashboard = require('../pageobjects/dashboard.js');

//login

Given(/^user is on homepage$/, async () => {
	await Page.goToUrl();
});

When(/^user enters username and password$/, async () => {
	await Page.login(global.username,global.password);
});

Then(/^redirected to dashboard$/, async () => {
	await Page.checkRedirection();
});


//timesheet


Given(/^user is on the dashboard$/, async () => {
	await Page.checkRedirection();
});

When(/^user clicks on Projects$/, async () => {
    await Dashboard.goToProjects();
});

When(/^user clicks on timesheet$/, async () => {
	await Dashboard.goToTimesheet();
});

Then(/^user user fills out the timesheet$/, async () => {
	await Dashboard.createNew(global.activity,global.date,global.team);
});
