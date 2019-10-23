import React from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import { Button, List, } from 'semantic-ui-react'

class People extends React.Component {
  state = { people: [], next: '', previous: '', }

  componentDidMount() {
    this.getPeople('https://swapi.co/api/people/')
  }

  getPeople = (route) => {
    axios.get(route)
      .then(res => {
        this.setState({ 
          people: res.data.results, 
          next: res.data.next,
          previous: res.data.previous,
        })
      })
  }

  render() {
    const { people, next, previous, } = this.state
    return (
      <>
        <h2>Characters</h2>
        { people.length === 0 ?
          <p>rendering</p>
          :
          <>
            <List>
              {people.map( person => 
                <List.Item>
                  <Link key={person.url} to={person.url.slice(20)}>
                    <List.Header>{person.name}</List.Header>
                  </Link>
                </List.Item>
              )} 
            </List>
            <p>pg.{next ?
              next.charAt(34) - 1
            :
              9
            }</p>
            { previous && 
              <Button onClick={() => this.getPeople(previous)}>Previous</Button>
            }
            { next && 
              <Button onClick={() => this.getPeople(next)}>Next</Button>
            }
          </>
        }
      </>
    )
  }
}

export default People