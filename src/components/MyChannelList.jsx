import React from "react";
import { ChannelList } from "stream-chat-react";

function MyChannelList() {
  return (
    <div className="flex h-screen">
      <div className="leftColumn w-80">
        <ChannelList />
      </div>
      <div className="rightColumn py-6 px-2"></div>
    </div>
  );
}

export default MyChannelList;
