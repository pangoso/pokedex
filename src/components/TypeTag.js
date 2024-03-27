import * as React from 'react';

export const TypeTag = (props) => {
  function returnColor(type) {
    switch(type) {
      case 'grass':
        return '#8CD36C'
      case 'poison':
        return '#B76EA5'
      case 'fire':
        return '#FF6143'
      case 'flying':
        return '#8898FF'
      case 'dragon':
        return '#7666EE'
      case 'water':
        return '#3399FE'
      case 'bug':
        return '#AABA23'
      case 'normal':
        return '#AAAA99'
      case 'dark':
        return '#775444'
      case 'electric':
        return '#FFCC33'
      case 'psychic':
        return '#FF70A4'
      case 'ground':
        return '#DCBB54'
      case 'steel':
        return '#AAAABB'
      case 'ice':
        return '#65CCFF'
      case 'fairy':
        return '#EE99EE'
      case 'fighting':
        return '#BA5544'
      case 'rock':
        return '#BBAA66'
      case 'ghost':
        return '#6666BA'
      default:
        return 'black'
    }
  }

  function returnBorderColor(type) {
    switch(type) {
      case 'grass':
        return '#5EA444'
      case 'poison':
        return '#88447A'
      case 'fire':
        return '#CC361B'
      case 'flying':
        return '#2A7ACC'
      case 'dragon':
        return '#6153BF'
      case 'water':
        return '#2A7ACC'
      case 'bug':
        return '#87951C'
      case 'normal':
        return '#88887B'
      case 'dark':
        return '#775F51'
      case 'electric':
        return '#CCA329'
      case 'psychic':
        return '#D5618B'
      case 'ground':
        return '#BCA45D'
      case 'steel':
        return '#888896'
      case 'ice':
        return '#6DB1CF'
      case 'fairy':
        return '#BE7BBE'
      case 'fighting':
        return '#A55F50'
      case 'rock':
        return '#968953'
      case 'ghost':
        return '#525295'
      default:
        return 'black'
    }
  }

  return (
    <div style={{
      fontWeight: 'bold',
      color: 'white',
      background: returnColor(props.text),
      marginBottom: '2px',
      padding: 3,
      borderRadius: '5px',
      width: '80px',
      textAlign: 'center',
      borderColor: returnBorderColor(props.text),
      borderWidth: '1px',
      borderStyle: 'solid'
    }}>
      {props.text.toUpperCase()}
    </div>
  )
}