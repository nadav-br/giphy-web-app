import react, {useState, useEffect, useRef} from 'react';
import CardsList from './components/CardsList';
import axios from "axios";
import './app.scss';

function App() {
  const myInputRef = useRef(null)
  const [giphyList, setGiphyList] = useState([]);

  useEffect(()=> {
    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=i6i7TavGvhrxKzwC5Rih2ttZdyHJlw7D&limit=25&offset=0&rating=g&lang=en")
    .then(res => {
      setGiphyList(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  const searchHandler = async () => {
    const value = myInputRef.current.value
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=i6i7TavGvhrxKzwC5Rih2ttZdyHJlw7D&q=${value}&limit=25&offset=0&rating=g&lang=en`)
    setGiphyList(result.data.data)
    myInputRef.current.value = ""
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="searchBar">
          <input type="text" ref={myInputRef} />
          <button onClick={searchHandler}>🔎</button>
        </div>
        <CardsList giphyList={giphyList}/>
      </div>
      
    </div>
  );
}

export default App;
