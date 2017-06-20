import { InventairePage } from './app.po';

describe('inventaire App', () => {
  let page: InventairePage;

  beforeEach(() => {
    page = new InventairePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
