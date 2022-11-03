var ip = require("ip");
const { config } = require("../wdio.conf");
var a = ip.address();
console.log("private ip address", a);

describe('Confirms whether you are using Sauce Connect or not', () => {
    it('should open a webpage', async() => {
        await browser.url('https://www.whatismyip.com/');
        await browser.pause(40000);
        await expect(browser).toHaveTitle('What Is My IP? Shows Your Public IP Address - IPv4 - IPv6');
    });
    it('copies IP to console', async() => {
        // const disagree = await $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]');
        // await disagree.click();

        const myIP = await $('//*[@id="ipv4"]/a');
        console.log(await myIP.getText());
        // in real test, uncomment this for mobile so it can load the full recording in sauce ui
    });
    it('confirms whether sauce connect is used', async() => {
        if(config.services.some(e => e[1].sauceConnect === true)) {
            console.log("You are using Sauce Connect");
            // path to your config where sauce is stored
            expect(config.services.some(e => e[1].sauceConnect)).toBeTruthy();
        } else {
            console.log("You are not using Sauce Connect");
            expect(config.services.some(e => e[1].sauceConnect)).toBeTruthy();
        }
    }); 
});