import { browser } from "@wdio/globals";

export default class BasePage {
  /**
   * Returns the browser instance.
   * @protected
   * @returns {WebdriverIO.Browser} The browser instance.
   */
  protected get browser() {
    return browser;
  }

  /**
   * Opens a URL in the browser.
   * @param {string} url - The URL to open.
   * @returns {Promise<void>}
   */
  public async openUrl(url: string) {
    await browser.url(url);
    await browser.maximizeWindow();
  }

  /**
   * Writes text into a specified element.
   * @param {ChainablePromiseElement} element - The element to write text into.
   * @param {string} text - The text to write.
   * @returns {Promise<void>}
   */
  public async writeTextOn(element: ChainablePromiseElement, text: string) {
    await element.waitForDisplayed();
    await element.clearValue();
    await element.setValue(text);
  }

  /**
   * Clicks on a specified element.
   * @param {ChainablePromiseElement} element - The element to click on.
   * @returns {Promise<void>}
   */
  public async clickOn(element: ChainablePromiseElement) {
    await element.waitForDisplayed();
    await element.click();
  }

  /**
   * Selects an option from a dropdown by its attribute value.
   * @param {ChainablePromiseElement} element - The dropdown element.
   * @param {string} attribute - The attribute to match.
   * @param {string} option - The value of the option to select.
   * @returns {Promise<void>}
   */
  public async selectOptionByValue(
    element: ChainablePromiseElement,
    attribute: string,
    option: string
  ) {
    await element.waitForDisplayed();
    await element.selectByAttribute(attribute, option);
  }

  /**
   * Selects an option from a dropdown by its visible text.
   * @param {ChainablePromiseElement} element - The dropdown element.
   * @param {string} option - The visible text of the option to select.
   * @returns {Promise<void>}
   */
  public async selectOptionByText(
    element: ChainablePromiseElement,
    option: string
  ) {
    await element.waitForDisplayed();
    await element.selectByVisibleText(option);
  }

  /**
   * Selects an option from a dropdown by its index.
   * @param {ChainablePromiseElement} element - The dropdown element.
   * @param {number} option - The index of the option to select.
   * @returns {Promise<void>}
   */
  public async selectOptionByIndex(
    element: ChainablePromiseElement,
    option: number
  ) {
    await element.waitForDisplayed();
    await element.selectByIndex(option);
  }

  /**
   * Gets the text content of a specified element.
   * @param {ChainablePromiseElement} element - The element to get text from.
   * @returns {Promise<string>} The text content of the element.
   */
  public async getTextFrom(element: ChainablePromiseElement): Promise<string> {
    await element.waitForDisplayed();
    return await element.getText();
  }

  /**
   * Gets the value of a specified element.
   * @param {ChainablePromiseElement} element - The element to get value from.
   * @returns {Promise<string>} The value of the element.
   */
  public async getValueFrom(element: ChainablePromiseElement): Promise<string> {
    await element.waitForDisplayed();
    return await element.getValue();
  }

  /**
   * Checks if a specified element is displayed.
   * @param {ChainablePromiseElement} element - The element to check.
   * @returns {Promise<boolean>} True if the element is displayed, otherwise false.
   */
  public async isDisplayed(element: ChainablePromiseElement): Promise<boolean> {
    return await element.isDisplayed();
  }

  /**
   * Accepts the currently displayed alert dialog.
   *
   * @returns {Promise<void>} A promise that resolves when the alert is accepted.
   */
  public async acceptAlert() {
    return await browser.acceptAlert();
  }

  /**
   * Dismisses the currently displayed alert dialog.
   *
   * @returns {Promise<void>} A promise that resolves when the alert is dismissed.
   */
  public async desmisAlert() {
    return await browser.dismissAlert();
  }

  /**
   * Scrolls the specified element into view.
   *
   * @param {ChainablePromiseElement} element - The element to scroll into view.
   * @returns {Promise<void>} A promise that resolves when the element is scrolled into view.
   */
  public async scrollIntoView(element: ChainablePromiseElement) {
    await element.scrollIntoView();
  }
}
