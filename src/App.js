
import './App.scss';
import bckgrnd from './images/1.jpg'

function App() {
  return (
    <div className="App">
      <img className="background" src={bckgrnd} alt="Background"/>
      <div className="description">Through my art, I strive to create a visual language that resonates with viewers, evoking a range of emotions and provoking contemplation.<br/> Each brushstroke, color choice, and hidden symbol serves to convey a narrative that goes beyond the surface, inviting viewers to explore the multifaceted nature of the human experience.</div>
    </div>
  );
}

export default App;
