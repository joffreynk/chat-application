'use client'

import { ChatItem, ChatList } from "react-chat-elements";

const Chat = () => {
  return (
    <div>
      <ChatItem
        id={1}
        avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
        alt="kursat_avatar"
        title="Kursat"
        subtitle="Ok. See you !"
        date={new Date()}
        unread={0}
      />
      ;
      <ChatItem
        id={2}
        avatar="https://avatars.githubusercontent.com/u/41473129?v=4"
        alt="kursat_avatar"
        title="Emre"
        subtitle="What are you doing ?"
        date={new Date()}
        muted={true}
        showMute={true}
        showVideoCall={true}
        unread={2}
      />
      <ChatList
        className="chat-list"
        dataSource={[
          {
            avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
            id: 1,
            alt: "kursat_avatar",
            title: "Kursat",
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
        ]}
      />
    </div>
  );
};

export default Chat;
