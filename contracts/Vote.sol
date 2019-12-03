pragma solidity >=0.5.0 <0.6.0;

contract Vote {
    struct Election {
        uint32[] candidates;
        address[] voters;
        mapping(address => uint32[]) votes;
    }

    uint32[] electionList;
    mapping(uint32 => Election) elections;

    function createElection(uint32 number) public returns(bool) {
        electionList.push(number);

        return true;
    }

    function listElections() public view returns(uint32[] memory) {
        return electionList;
    }

    function getCandidates(uint32 electionId) public view returns(uint32[] memory) {
        return elections[electionId].candidates;
    }

    function setCandidates(uint32 electionId, uint32[] memory candidates) public {
        elections[electionId].candidates = candidates;
    }

    function userVote(uint32 electionId, uint32[] memory eluIds) public {
        // require only one sender on voters
        elections[electionId].voters.push(msg.sender);
        elections[electionId].votes[msg.sender] = eluIds;
    }

    function elect(uint256[] memory candidates) private pure returns(uint256) {
        return candidates[0];
    }

    function getResult(uint32 electionId) public view returns(uint256) {
        Election storage election = elections[electionId];
        uint256[] memory elusResults;

        // elusResults[565465645] = 6;

        for(uint i = 0; i < election.voters.length; ++i) {
            uint32[] storage vote = election.votes[election.voters[i]];
            for(uint j = 0; j < vote.length; ++j) {
                uint points = vote.length - j;
                uint32 candidate = vote[j];

                elusResults[candidate] += points;
            }
        }

        uint256 max = 0;
        uint equality_count = 0;
        uint256[] memory equals = new uint256[](election.candidates.length);

        for(uint i = 0; i < elusResults.length; ++i) {
            if(elusResults[i] > max) {
                equality_count = 0;
                max = elusResults[i];
                equals = new uint256[](election.candidates.length);
            } else if(elusResults[i] == max) {
                equality_count += 1;
            }

            equals[equality_count] = i;
        }

        return elect(equals);
    }
}


// Vote.setCandidates(10, [541, 5653, 41, 1234])
// Vote.getCandidates()
// Vote.userVote(10, [41, 1234, 5653, 541])
