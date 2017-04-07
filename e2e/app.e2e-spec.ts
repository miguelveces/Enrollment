import { EnrollmentPage } from './app.po';

describe('enrollment App', () => {
  let page: EnrollmentPage;

  beforeEach(() => {
    page = new EnrollmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
