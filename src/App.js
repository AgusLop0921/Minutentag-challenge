import { Message } from "./components/Message/Message";
import { FocusableInput } from "./components/FocusableInput/FocusableInput";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus/PlayerStatus";
import { TeamsList } from "./components/TeamsList/TeamsList";
import { Rating } from "./components/Rating/Rating";
import { Tabs } from "./components/Tabs/Tabs";

import './App.css';

const links = [
  "https://indiehoy.com/wp-content/uploads/2020/12/the-office.jpg",
  "https://www.laprimerapiedra.com.ar/wp-content/uploads/the-office-1200.jpg",
  "https://tn.com.ar/resizer/AdGS3ukVnbM2FscYiZDdkzVWNGc=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/F4QFIWLQMZEBDLSXTVIMACS24U.jpg"
];
export default function App() {
  const tabs = [
    {
      label: "'Message' test", content: <Message />
    },
    {
      label: "'FocusableInput'", content: <FocusableInput />
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

  return (
    <div className="app">
      <Tabs tabs={tabs} />
    </div>
  );

}
