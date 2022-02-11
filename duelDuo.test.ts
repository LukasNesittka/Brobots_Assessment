
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    await driver.sleep(2000)
    const displayed = await title.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
})

test('draw button draws choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('see all bots shows all bots', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(2000)
    const bots = await driver.findElement(By.className('bot-btn'))
    await bots.click()
    await driver.sleep(2000)
    const playerBots = await driver.findElement(By.className('bot-card outline'))
    const displayed = await playerBots.isDisplayed()
    expect(displayed).toBe(true)
})