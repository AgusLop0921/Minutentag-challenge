import { Message } from "./components/Message/Message";
import { FocusableInput } from "./components/FocusableInput/FocusableInput";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus/PlayerStatus";
import { TeamsList } from "./components/TeamsList/TeamsList";
import { Rating } from "./components/Rating/Rating";
import './App.css';

export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <h3>'Rating' test</h3>
      <Rating />
    </div>
  );
}
