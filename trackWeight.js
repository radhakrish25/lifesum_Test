describe("Track Weight Test suite", function()
{
    var waitElementToBeShown = function (elm) {
        browser.wait(function () {
            return elm.isPresent();
        },20000);
        browser.wait(function () {
            return elm.isDisplayed();
        },20000);
    };

    var waitElementToDisappear = function (locator) {
        browser.wait(function()
        {
            return browser.isElementPresent(locator) //if element is already present, this line will evaluate to true
                .then(function(presenceOfElement) {return !presenceOfElement}); // this modifies the previous line so that it evaluates to false until the element is no longer present.
        }, 10000);
    }

    beforeEach(function()
    {
        browser.get('http://lifesum.com');
    });
    it('Track Weight', function()
    {
        waitElementToBeShown($('.landing_header_navigation li:nth-child(3) .login'));
        $('.landing_header_navigation li:nth-child(3) .login').click();
        waitElementToBeShown($('body[class$=\"modal-open\"]'));
        element.all(by.id('id_username')).get(1).sendKeys('steq2@mail.ru');
        element.all(by.id('id_password')).get(1).sendKeys('lifesum111');
        $$('.green-login').get(1).click();
        browser.wait(function () {
            return element(by.id('search_field')).isDisplayed();
        },15000);
        element(by.id('search_field')).sendKeys('egg');
        $('.search_button').click();
        waitElementToBeShown(element(by.repeater('result in searchResults').row(0)));
        (element(by.repeater('result in searchResults').row(0)).$('.button_green')).click();
        $$('.selected_item').get(0).click();
        waitElementToBeShown($('.dropdown_active'));
        $('.lifesum_trans_lunch').click();
        (element(by.repeater('result in searchResults').row(0)).$('.button_green')).click();
        $('.profile').click();
        waitElementToBeShown($$('.button_green').get(0));
        $$('.button_green').get(0).click();
        waitElementToBeShown($('.modal-open'));
        waitElementToBeShown(element(by.id('trackWeightValue')));
        element(by.id('trackWeightValue')).sendKeys('120');
        element(by.id('trackWeightSubmit')).click();
        waitElementToDisappear($('.modal-open'));
        $('.name').click();
        waitElementToBeShown(element(by.id('logout')));
        element(by.id('logout')).click();
    });
});