import React from 'react';

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
class WishForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      image: '',
      ranking: '',
      price: '',
      holidays: [],
      selectedHoliday: ''
    }
  }

  // state = {
  //   name: '',
  //   description: '',
  //   image: '',
  //   ranking: '',
  //   holidays: [],
  //   selectedHoliday: ''
  // }

  componentDidMount() {
    fetch(holidaysEndpoint).then(r => r.json()).then(holidays => { this.setState({ holidays: holidays }) })
  }

  holidayOptions = () => {
    return this.state.holidays.map((h) => {
      return <option key={h.id}>{h.name}</option>
    })
  }

  handleChange = (event) => {
    // console.log(e.target.value);
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handlePost(this.state)
  }

  render() {
    // console.log("WishForm props", this.props.handlePost);
    // console.log("====================");
    // console.log("WishForm state", this.state);
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input type="text" name="name" className="form-control" placeholder="whachu want?" onChange={this.handleChange} value={this.state.name}/>
          </div>
          <div className="col">
            <input type="text" name="description" className="form-control" placeholder="description..." onChange={this.handleChange} value={this.state.description}/>
          </div>
          <div className="col">
            <input type="text" name="image" className="form-control" placeholder="image url..." onChange={this.handleChange} value={this.state.image}/>
          </div>
          <div className="col">
            <input type="text" name="ranking" className="form-control" placeholder="ranking 1-5..." onChange={this.handleChange} value={this.state.ranking}/>
            <small>5 is "I can't survive without it."</small>
          </div>
          <div className="col">
            <input type="text" name="price" className="form-control" placeholder="$$$" onChange={this.handleChange} value={this.state.price}/>
          </div>
          <select name="selectedHoliday" className="custom-select" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.selectedHoliday}>
           <option default>Choose Holiday...</option>
           {this.holidayOptions()}
         </select>
         <button type="submit" className="btn btn-info">Submit</button>
        </div>
        </form>
      </div>
    )
  }


}


export default WishForm;
