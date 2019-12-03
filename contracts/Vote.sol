pragma solidity >=0.5.0 <0.6.0;

contract Vote {
    struct Election {
        uint32[] candidates;
        address[] voters;
        mapping(address => uint32[]) votes;
    }

    mapping(uint32 => Election) elections;

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

        uint256 pos_max = 0;
        uint256 max = 0;

        for(uint i = 0; i < elusResults.length; ++i) {
            if(elusResults[i] > max) {
                max = elusResults[i];
                pos_max = i;
            }
        }

        return pos_max;
    }
}


// Vote.setCandidates(10, [541, 5653, 41, 1234])
// Vote.getCandidates()
// Vote.userVote(10, [41, 1234, 5653, 541])
