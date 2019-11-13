const MetaCoin = artifacts.require("Main");

contract("Main", main => {
  it("should set value", () =>
    MetaCoin.deployed()
  .then(instance => {
    instance.set(5)
    return instance
  }).then(instance => instance.get.call())
    .then(value => {
      assert.equal(value.valueOf(), 5, "Should eq")
    })
  )
});
