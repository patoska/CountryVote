import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';

let isVoting = false
let submit = () => {
  console.log("CLICK")
}
let checkInput = () => {
  console.log("CHECK input")
}

const VotingForm = ({ searchTerm, onSearchChange }) => (
  <div className="card vote-form">
    <h3>Vote your Favourite Country</h3>
    <form>
        <TextInput
          name="name"
          placeholder="Name"
          onChange={checkInput}
          disabled={isVoting}
        />
        <TextInput
          name="email"
          placeholder="Email"
          onChange={checkInput}
          disabled={isVoting}
        />
        <TextInput
          name="country"
          placeholder="Country"
          onChange={checkInput}
          disabled={isVoting}
        />
        <Button
          type="submit"
          onClick={submit}
        >
          {isVoting ? 'Voting...' : 'Submit Vote'}
        </Button>
    </form>
  </div>
);

export default VotingForm;
