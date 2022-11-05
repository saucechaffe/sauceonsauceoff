var ip = require("ip");
const { config } = require("../wdio.conf");
var a = ip.address();
console.log("private ip address", a);

describe('Confirms whether you are using Sauce Connect or not', () => {
    it('should open a webpage', async() => {
        await browser.url('https://nordvpn.com/what-is-my-ip/');
        await browser.pause(10000);
        await expect(browser).toHaveTitle('What is my IP address location? Find out here | NordVPN');
    });
    it('copies IP to console', async() => {
        // const disagree = await $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]');
        // await disagree.click();

        const myIP = await $('/html/body/div[3]/div[2]/div/div/div/div/div/div/div[1]/h1[2]');
        console.log(await myIP.getText());
        // in real test, uncomment this for mobile so it can load the full recording in sauce ui
        await browser.pause(30000);
    });
    it('confirms whether sauce connect is used', async() => {
        if(config.services.some(e => e[1].sauceConnect === true)) {
            console.log("You are using Sauce Connect");
            // path to your config where sauce is stored
            expect(config.services.some(e => e[1].sauceConnect)).toBeTruthy();
        } else {
            console.log("You are not using Sauce Connect");
            // expect(config.services.some(e => e[1].sauceConnect)).toBeTruthy();
        }
    }); 
});