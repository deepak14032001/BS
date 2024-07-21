/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    scrollDown,
    goBack
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
var Book1 ="Sharp Objects";
var Book2 ="In a Dark, Dark ...";
var Book3 ="The Past Never Ends";
var Book4 ="A Murder in Time";
var Book5 ="The Murder oF Roger ...";
var Book6 ="The Last Mile (Amos ...";
var Book7 ="That Darkness (Gardiner and ...";
var Book8 ="Tastes Like Fear (DI ...";
var Book9 ="Book9 <A Time of Torment ...";
var Book10 ="A Study in Scarlet ...";
var Book11 ="Poisonous (Max Revere Novels ...";
var Book12 ="Murder at the 42nd ...";
var Book13 ="Most Wanted";
var Book14 ="Hide Away (Eve Duncan ...";
var Book15 ="Boar Island (Anna Pigeon ...";
var Book16 ="The Widow";
var Book17 ="Playing with Fire";
var Book18 ="What Happened on Beale ...";
var Book19 ="The Bachelor Girl's Guide ...";
var Book20 ="Delivering the Truth (Quaker ...";
var Book21 ="The Mysterious Affair at ..."
var Book22 ="In the Woods (Dublin ...";
var Book23 ="The Silkworm (Cormoran Strike ...";
var Book24 ="The Exiled";
var Book25 ="The Cuckoo's Calling (Cormoran ...";
var Book26 ="Extreme Prey (Lucas Davenport ...";
var Book27 ="Career of Evil (Cormoran ...";
var Book28 ="The No. 1 Ladies' ...";
var Book29 ="The Girl You Lost";
var Book30 ="The Girl in The ...";
var Book31 ="Blood Defense (Samantha Brinkman ...";
var Book32 ="1st to Die(Women's ...";
beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
step("Screen",
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
});


step("goto url",async () => {
    await goto('https://books.toscrape.com/catalogue/category/books/travel_2/index.html');
});
step("Click Mystery <Mystery>", async function (Mystery) {
    await click(Mystery);
    
});
 // function sleep(ms) {
  //return new Promise(resolve => setTimeout(resolve, ms));
 //}

step("Click Book1 <Sharp Objects>", async function (Book1) {
    await click(Book1);
    //await sleep(1000);
});

step("scrollDown",async function(){
    await scrollDown(200);
})

step("goback",async function(){
    await goBack();
    //await sleep(1000);
})

step("Click Book2 <In a Dark, Dark ...>", async function (Book2) {
    await click(Book2);
    
});

step("Click Book3<The Past Never Ends>", async function (Book3) {
    await click(Book3);
    
});

step("Click Book4 <A Murder in Time>", async function (Book4) {
    await click(Book4);
    
});

step("Click Book5 <The Murder of Roger ...>", async function (Book5) {
    await click(Book5);
    
});

step("Click Book6 <The Last Mile (Amos ...>", async function (Book6) {
    await click(Book6);
    
});

step("Click Book7 <That Darkness (Gardiner and ...>", async function (Book7) {
    await click(Book7);
    
});

step("Click Book8 <Tastes Like Fear (DI ...>", async function (Book8) {
    await click(Book8);
    
});

step("Click Book9 <A Time of Torrment ...>", async function (Book9) {
    await click(Book9);
    
});

step("Click Book10 <A Study in Scarlet ...>", async function (Book10) {
    await click(Book10);
    
});

step("Click Book11 <Poisonous (Max Revere Novels ...>", async function (Book11) {
    await click(Book11);
    
});

step("Click Book12 <Murder at the 42nd ...>", async function (Book12) {
    await click(Book12);
    
});

step("Click Book13 <Most Wanted>", async function (Book13) {
    await click(Book13);
    
});

step("Click Book14 <Hide Away (Eve Duncan ...>", async function (Book14) {
    await click(Book14);
    
});

step("Click Book15 <Boar Island (Anna Pigeon ...>", async function (Book15) {
    await click(Book15);
    
});

step("Click Book16 <The Widow>", async function (Book16) {
    await click(Book16);
    
});

step("Click Book17 <Playing with Fire>", async function (Book17) {
    await click(Book17);
    
});

step("Click Book18 <What Happened on Beale ...>", async function (Book18) {
    await click(Book18);
    
});

step("Click Book19 <The Bachelor Girl's Guide ...>", async function (Book19) {
    await click(Book19);
    
});

step("Click Book20 <Delivering the Truth (Quaker ...>", async function (Book20) {
    await click(Book20);
    
});


step("Click next <next>", async function (next) {
    await click(next);
    
});


step("Click Book21 <The Mysterious Affair at ...>", async function (Book21) {
    await click(Book21);
    
});


step("Click Book22 <In the Woods (Dublin ...>", async function (Book22) {
    await click(Book22);
    
});

step("Click Book23 <The Silkworm (Cormoran Strike ...>", async function (Book23) {
    await click(Book23);
    
});

step("Click Book24 <The Exiled>", async function (Book24) {
    await click(Book24);
    
});

step("Click Book25 <The Cuckoo's Calling (Cormoran  ...>", async function (Book25) {
    await click(Book25);
    
});

step("Click Book26 <Extreme Prey (Lucas Davenport ...>", async function (Book26) {
    await click(Book26);
    
});

step("Click Book27 <Career of Evil (Cormoran  ...>", async function (Book27) {
    await click(Book27);
    
});

step("Click Book28 <The No. 1 Ladies' ...>", async function (Book28) {
    await click(Book28);
    
});


step("Click Book29 <The Girl You Lost>", async function (Book29) {
    await click(Book29);
    
});

step("Click Book30 <The Girl In The ...>", async function (Book30) {
    await click(Book30);
    
});

step("Click Book31 <Blood Defense (Samantha Brinkman ...>", async function (Book31) {
    await click(Book31);
    
});

step("Click Book32 <1st to Die (Women's ...>", async function (Book23) {
    await click(Book23);
    
});

















