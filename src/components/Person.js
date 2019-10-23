import React from 'react'
import axios from 'axios'
import { Button, } from 'semantic-ui-react'

class Person extends React.Component {
  state = { person: {}, homeworld: '', }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ person: res.data, })
        axios.get(res.data.homeworld)
          .then(res => this.setState({ homeworld: res.data.name, }))
      })
  }

  render() {
    const { person, homeworld, } = this.state
    return (
      <>
        <br />
        {homeworld === '' ?
          <p>Loading...</p>
        :
          <>
            <h1>{person.name}</h1>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Home World: {homeworld}</p>
          </>
        }
        <Button onClick={() => this.props.history.push('/')}>Back</Button>
      </>
    )
  }
}

export default Person