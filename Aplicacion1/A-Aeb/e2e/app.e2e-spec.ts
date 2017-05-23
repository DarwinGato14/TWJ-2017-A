import { AAebPage } from './app.po';

describe('a-aeb App', () => {
  let page: AAebPage;

  beforeEach(() => {
    page = new AAebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
