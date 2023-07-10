import Concept from './Concept/Concept';


function Concepts(props) {
    return (
      <ul id="concepts">
          <Concept 
          title={props.items[0].title}
          alt={props.items[0].title}
          image={props.items[0].image}
          description={props.items[0].description}
           />
          <Concept 
          title={props.items[1].title}
          alt={props.items[1].title}
          image={props.items[1].image}
          description={props.items[1].description}
           />
          <Concept 
          title={props.items[2].title}
          alt={props.items[2].title}
          image={props.items[2].image}
          description={props.items[2].description}
           />
      </ul>
    );
  }


export default Concepts;