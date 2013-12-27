clickthrough
============

This project can be used to create quick cross-mobile-platform clickthrough demo using Sencha Touch and PhoneGap. With some easy setup, designer can show ideas on different mobile devices even without developers' help.

To customize the app and run on mobile device:

1. Install [<i class="icon-share"></i> Sencha Touch](http://www.sencha.com/products/touch/), [<i class="icon-share"></i> Sencha Cmd](http://www.sencha.com/products/sencha-cmd/download) and [<i class="icon-share"></i> PhoneGap](http://phonegap.com/) environment as instructed on offical website
2. Register on [<i class="icon-share"></i> PhoneGap Build](https://build.phonegap.com) website if you don't have account yet
3. Download the source code, and copy the design images to resources/images/
4. Update file app/model/Main.js to define page jump logic
5. Rename file phonegap.local.properties.default to phonegap.local.properties, and change "phonegap.build.remote" property to "true". Update your PhoneGap Build user name and password in this file also.
6. If you want to build iOS app, you'll need to provide your certificate (p12) file and provisioning profile to PhoneGap Build website. Follow the [<i class="icon-share"></i> instruction](http://docs.build.phonegap.com/en_US/2.9.0/signing_signing-ios.md.html#iOS%20Signing) to setup.
7. After above steps are done, open the command line and go to code directory. Execute command `sencha app build native`. This should build and upload your app to PhoneGap Build website.
8. Visit PhoneGap Build website, you should be able to see the application build status. After the build is done, scan the QR code on the page using your mobile device. It should start to download and install applicaiton on the device.
