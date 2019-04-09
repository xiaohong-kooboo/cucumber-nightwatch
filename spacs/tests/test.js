// let baiduPage, form
// module.exports = {
// 'BeforEach':function(browser){
//     baiduPage = browser.page.baiduPage()
//     form = baiduPage.section.form
// },
// 'Demo test Baidu Search' : function (browser) {
// browser
// .url('http://www.baidu.com')
// .waitForElementVisible('body', 1000)
// form.setValue('@input', 'baidu')
// form.waitForElementPresent('@submit', 3000)
// form.click('@submit')
// .pause(1000)
// .assert.containsText('#main', 'baidu')
// .end();
// }
// }