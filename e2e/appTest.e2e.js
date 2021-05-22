describe("Search Flow", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should render the app title", async () => {
    // Checking if the app title is present
    await expect(element(by.text("Github Explorer"))).toBeVisible();
  });

  it("should search an user successfully", async () => {
    // Getting the reference to search_input and search_button
    const search_input = element(by.id("search_user"));
    const search_button = element(by.id("search_button"));

    // Checking if the search input is visible
    await expect(search_input).toBeVisible();

    // Typing a valid user
    await search_input.typeText("rubemfsv");

    // Type \n to close keyboard
    await search_input.typeText("\n");

    // Executing a tap/press to search
    await search_button.tap();

    // Checking if found the user checking if the label public repos is showing
    await expect(element(by.text("Public Repos"))).toBeVisible();

    // Executing a tap/press on the Public Repos card
    await element(by.text("Public Repos")).tap();
    // Executing a tap/press to back to dashboard
    await element(by.id("back_button")).tap();

    // Executing a tap/press on the Public Gists card
    await element(by.text("Public Gists")).tap();

    // Executing a tap/press to back to dashboard
    await element(by.id("back_button")).tap();

    // Swiping left
    await element(by.id("card-slide")).swipe("left");

    // Executing a tap/press on the Followers card
    await element(by.text("Followers")).tap();
    // Executing a tap/press to back to dashboard
    await element(by.id("back_button")).tap();

    // Executing a tap/press on the Following card
    await element(by.text("Following")).tap();
    // Executing a tap/press to back to dashboard
    await element(by.id("back_button")).tap();

    // Swiping right
    await element(by.id("card-slide")).swipe("right");
  });
});
