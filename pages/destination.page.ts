import { Locator, Page } from '@playwright/test';

enum COLORS {
  GREEN = 'green',
  RED = 'red',
  BLUE = 'blue',
  BROWN = 'brown',
  PURPLE = 'purple',
}

export class DestinationPage {
  readonly planetColorDropdown: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.planetColorDropdown = page.locator('[data-react-toolbox="dropdown"]').last();
  }

  async open() {
    await this.page.goto('');
  }

  async selectPlanetColor(color: string) {
    if (Object.values(COLORS).includes(color as COLORS)) {
      await this.planetColorDropdown.click();
      await this.planetColorDropdown.locator('ul li', { hasText: color }).click();
    } else {
      throw new Error(`Color ${color} is not a valid color. Please select from: ${Object.values(COLORS).join(', ')}`);
    }
  }

  async bookFirstPlanet() {
    await this.page.getByRole('button', { name: 'BOOK' }).first().click();
  }
}
