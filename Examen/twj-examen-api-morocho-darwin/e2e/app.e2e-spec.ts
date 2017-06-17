import { TwjExamenApiMorochoDarwinPage } from './app.po';

describe('twj-examen-api-morocho-darwin App', () => {
  let page: TwjExamenApiMorochoDarwinPage;

  beforeEach(() => {
    page = new TwjExamenApiMorochoDarwinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
