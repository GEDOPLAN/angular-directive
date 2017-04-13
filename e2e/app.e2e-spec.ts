import { AngularDirectivePage } from './app.po';

describe('angular-directive App', () => {
  let page: AngularDirectivePage;

  beforeEach(() => {
    page = new AngularDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
