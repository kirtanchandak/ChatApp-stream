import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { useState, useEffect } from "react";
const apiKey = process.env.REACT_APP_API_KEY;
const USER1 = {
  id: "user1",
  name: "User 1",
  image: "https://getstream.io/random_svg/?id=user1",
};
const USER2 = {
  id: "user1",
  name: "User 1",
  image: "https://getstream.io/random_svg/?id=user1",
};
const USER3 = {
  id: "user1",
  name: "User 1",
  image: "https://getstream.io/random_svg/?id=user1",
};

const users = [USER1, USER2, USER3];
const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

function App() {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    function initChat() {
      const client = StreamChat.getInstance(apiKey);
      const user = getRandomUser();
      client.connectUser(user, client.devToken(user.id));
      setChatClient(chatClient);
    }
    initChat();
  }, []);

  if (!chatClient) return <div></div>;
  return (
    <div className="App">
      <Chat client={chatClient} theme={"messaging light"}></Chat>
    </div>
  );
}

export default App;
