import { CareplanPeoplePage } from './app.po';

describe('careplan-people App', () => {
  let page: CareplanPeoplePage;

  beforeEach(() => {
    page = new CareplanPeoplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
