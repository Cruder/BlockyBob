const Vote = artifacts.require("Vote");

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
    it('vote election 0 with order 2143 and result 2', async () => {
      let instance = await Vote.deployed()
      await instance.setCandidates(0, [0,1,2,3])
      await instance.userVote(0, [2,1,0,3])
      let result = await instance.getResult.call(0)
      assert.equal(result, 2, 'Should Equal')
      }
    );
  }
);
