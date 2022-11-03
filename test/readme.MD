# Verification of Sauce Connect

This test's sole purpose is to confirm whether you are using Sauce Connect or not so we can determine if it is using the tunnels IP, or yours. There are few things that are needed in order for this to work.

 - Test up and running
 - Sauce Connect enabled in services (wdio)
 - Check the tunnels tab in your Sauce UI to validate whether you are using a tunnel or there is a tunnel running

# How it works

The tool will log what IP is being used for the test so you can determine whether it is yours or the tunnels. There are multiple Sauce flags that can be used to ensure the proxy does not route back to your address if you kick the tunnel off on your local machine.
[Sauce Connect Proxy CLI](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--direct-domains)
