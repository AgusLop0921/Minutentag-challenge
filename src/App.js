import { ListItemsForNavigation } from "./components/ListItemsForNavigation/ListItemsForNavigation";
import { FocusableInput } from "./components/FocusableInput/FocusableInput";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus/PlayerStatus";
import { TeamsList } from "./components/TeamsList/TeamsList";
import { Message } from "./components/Message/Message";
import { Grocery } from "./components/Grocery/Grocery";
import { Rating } from "./components/Rating/Rating";
import { Tabs } from "./components/Tabs/Tabs";
import { products, links } from "./mocks/mocks";
import './App.css';

const tabs = [
  {
    label: "'Message' test", content: <Message />
  },
  {
    label: "'Grocery' test", content: <Grocery products={products} />
  },
  {
    label: "'FocusableInput'", content: <FocusableInput />
  },
  {
    label: "'ListItemsForNavigation'", content: <ListItemsForNavigation />
  },
  {
    label: "'ImageGallery' test", content: <ImageGallery links={links} />
  },
  {
    label: "'PlayerStatus' test", content: <PlayerStatus />
  },
  {
    label: "'TeamsList' test", content: <TeamsList />
  },
  {
    label: "'Rating' test", content: <Rating />
  },
];

export default function App() {

  return (
    <div className="app">
      <Tabs tabs={tabs} />
    </div>
  );
}
