import React,{Component} from 'react'
import { saveFormData } from './api';




class Form extends Component{
    constructor(props){
        super(props)

        this.state={
    name: '',
    mobile: '',
    email: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
  }
    }
        handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({
    [name]: value,
  });
};


  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state); // use this.state
    const result = await saveFormData(this.state); // pass state to API
    console.log('Server response:', result);
    alert('Feedback submitted successfully!');
  };


    render(){
       const questionMap = {
      1: 'How often do you use this freelancer office facility?',
      2: 'How would you rate the overall cleanliness of the facility?',
      3: 'How comfortable is the seating and workspace setup?',
      4: 'How reliable and fast is the internet connection?',
      5: 'Are the meeting rooms and private spaces sufficient for your needs?',
      6: 'How do you rate the availability of refreshments?',
      7: 'Is the location of the facility convenient for you?',
      8: 'How do you feel about the pricing for the services provided?',
      9: 'How helpful and responsive is the support staff?',
      10: 'How likely are you to recommend this facility to other freelancers?',
    };

    const optionsMap = {
      1: ['Daily', 'A few times a week', 'Weekly', 'Occasionally', 'First time'],
      2: ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'],
      3: ['Very comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very uncomfortable'],
      4: ['Excellent', 'Good', 'Fair', 'Poor', 'Didn’t use the internet'],
      5: ['Always sufficient', 'Mostly sufficient', 'Sometimes difficult to book', 'Rarely available', 'Didn’t use these spaces'],
      6: ['Excellent', 'Good', 'Average', 'Poor', 'Didn’t use'],
      7: ['Very convenient', 'Somewhat convenient', 'Neutral', 'Slightly inconvenient', 'Very inconvenient'],
      8: ['Excellent value', 'Reasonable', 'Slightly expensive', 'Overpriced', 'Not sure'],
      9: ['Very helpful', 'Generally helpful', 'Average', 'Rarely helpful', 'Didn’t interact with staff'],
      10: ['Definitely will recommend', 'Probably will', 'Might or might not', 'Probably won’t', 'Definitely won’t'],
    };

        return(
          
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
              
                     

                <form className="space-y-4" onSubmit={this.handleSubmit}>
                 <div className="form-container"><div>
          <label className="block font-medium">Full Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-medium">Mobile Number</label>
          <input type="tel" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-medium">Email Address</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="w-full border p-2 rounded" required />
        </div>
        {Array.from({ length: 10 }, (_, i) => {
  const questionNum = i + 1;
  return (
    <fieldset key={questionNum} className="question-card">
  <div className="question-text">
    Q{questionNum}. {questionMap[questionNum]}
  </div>
  {optionsMap[questionNum].map((opt, idx) => (
    <label key={idx}>
      <input
        type="radio"
        name={`q${questionNum}`}
        value={opt}
        checked={this.state[`q${questionNum}`] === opt}
        onChange={this.handleChange}
        required
      />
      {opt}
    </label>
  ))}
</fieldset>

  );
})}
<div className="submit-button-wrapper">
  <button type="submit" className="submit-button">
    Submit Feedback
  </button>
</div>
        </div>
      
        
        </form>
          
        
            </div>

        )
    }
}

export default Form