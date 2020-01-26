import React from "react";
import drizzle from "../../store";

class CreateCandidateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stackId: null };
    this.createCandidate = this.createCandidate.bind(this);
    this.selectCandidate = this.selectCandidate.bind(this);
  }

  createCandidate() {
    console.log("create candidate", this.props);
    const { status, accounts } = this.props;
    const contract = drizzle.contracts.Vote;
    const electionId = this.props.electionId;

    const stackId = contract.methods.pushCandidate.cacheSend(electionId, Date.now(), {
      from: this.props.accounts[0]
    });

    this.setState({ stackId });
    console.log("create end", stackId);

  }

  selectCandidate(event){
    console.log("select",event.target.value);
    this.setState({candidate: event.target.value})
  }

  render() {

    return <div>
      {/*<select onChange={this.selectCandidate} >*/}
      {/*  <option value="">--Please choose a candidate--</option>*/}
      {/*  {Object.values(this.props.accounts).map(account => (*/}
      {/*      <option value={account}>{account}</option>*/}
      {/*  ))}*/}
      {/*</select>*/}
      <button onClick={this.createCandidate}>Ajouter un candidat</button>
    </div>

  }
}

export default CreateCandidateButton;
