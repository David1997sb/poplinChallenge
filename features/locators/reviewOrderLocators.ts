import { Locator, Page } from 'playwright';

export class reviewOrderLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get pickupLocationText(): Locator {
    return this.page.locator('#review-card-pickup span').first(); 
  }

  get bagCountText(): Locator {
    return this.page.locator("#review-card-bag span").first(); 
  }

  get oversizedItemsText(): Locator {
    return this.page.locator("#review-card-oversized span").first(); 
  }

  get preferredLaundryProsText(): Locator {
    return this.page.locator("#review-card-preferred span").first(); 
  }

  get coverageText(): Locator {
    return this.page.locator("#review-card-coverage-wrapper h2").first(); 
  }

  
}
