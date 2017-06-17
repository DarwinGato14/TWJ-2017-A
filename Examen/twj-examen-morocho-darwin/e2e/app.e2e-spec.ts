import { TwjExamenMorochoDarwinPage } from './app.po';

describe('twj-examen-morocho-darwin App', () => {
  let page: TwjExamenMorochoDarwinPage;

  beforeEach(() => {
    page = new TwjExamenMorochoDarwinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
