import './App.css'
import Card from './components/Card'
import { useContextGlobal } from './utils/global.context';

function App() {
  const { state } = useContextGlobal();

  const renderCards = () => {
    const cards = [];
    if (Array.isArray(state)) {
      state.forEach(element => {
        cards.push(<Card key={element.id} odontologo={element} />);
      });
    }
    return cards;
  }

  return (
    <>
      <h1>Testing React-Java Local Communication</h1>
      {renderCards()}
    </>
  )
}

export default App
