import "./App.css";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageInput,
  MessageList,
  ChannelList,
} from "stream-chat-react";
import { useState, useEffect } from "react";
import "stream-chat-react/dist/css/index.css";
const apiKey = process.env.REACT_APP_API_KEY;
const USER1 = {
  id: "user1",
  name: "User 1",
  image: "./favicon.ico",
};
const USER2 = {
  id: "user2",
  name: "User 2",
  image: "./favicon.ico",
};
const USER3 = {
  id: "user3",
  name: "User 3",
  image: "./favicon.ico",
};

const users = [USER1, USER2, USER3];
const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

function App() {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    async function initChat() {
      const client = StreamChat.getInstance(apiKey);
      const user = getRandomUser();
      client.connectUser(user, client.devToken(user.id));
      const channel = client.channel("team", "genera", {
        name: "GDSC GHRCEM",
        image: "./favicon.ico",
      });
      await channel.create();
      channel.addMembers([user.id]);
      setChannel(channel);
      setChatClient(client);
    }
    initChat();
    return () => {
      if (chatClient) chatClient.disconnect();
    };
  }, []);

  if (!chatClient || !channel) return <div></div>;
  return (
    <div className="App">
      <Chat client={chatClient} theme={"messaging light"}>
        <ChannelList />
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
}

export default App;
