const MetaCoin = artifacts.require("Main");
const Vote = artifacts.require("Vote");

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

contract("Vote", vote =>
  {
    it("create election", () =>
      Vote.deployed()
    .then(instance => {
      instance.createElection(0)
      return instance
    }).then(instance => instance.listElections.call())
      .then(value => {
          assert.equal(value.length, 1, "Should eq")
        }
      )
    );
    it('add candidates for election id O', async () => {
      let instance = await Vote.deployed()
      await instance.setCandidates(0, [1,2,3,4])
      let value = await instance.getCandidates.call(0)
      let vals = value.map(v => v.words[0])
      assert.deepEqual(vals, [1,2,3,4], "Should eq")
      }
    );
    it('vote election 0 with order 2143', async () => {
      let instance = await Vote.deployed()
      console.log("Set Candidate")
      await instance.setCandidates(0, [0,1,2,3])
      console.log("Vote")
      await instance.userVote(0, [2,1,0,3])
      console.log("Result calculation")
      let result = await instance.getResult.call(0)
      console.log("Finish")
      console.log(result)
      assert.equal(result, 2, 'Should Equal')
      }
    );
  }
);
