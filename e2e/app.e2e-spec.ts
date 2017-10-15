import { AngularHome2Page } from './app.po';

describe('angular-home2 App', () => {
  let page: AngularHome2Page;

  beforeEach(() => {
    page = new AngularHome2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
