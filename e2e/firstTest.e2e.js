describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Github Explorer title', async () => {
    await expect(element(by.text('Github Explorer'))).toBeVisible();
  })
});
