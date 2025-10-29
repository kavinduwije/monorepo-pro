class AndroidHomePage {
  get title() { return $("//*[@text='App' or @content-desc='App']"); }
}
export default new AndroidHomePage();