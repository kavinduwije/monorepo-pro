class HomePage {
  open() { browser.url("/"); }
  get header() { return $("h1"); }
}
export default new HomePage();