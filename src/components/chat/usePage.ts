import {
  createElement,
  type KeyboardEvent,
  type ReactNode,
  useMemo,
  useState,
  useRef,
} from "react";

import IconUzum from "@/assets/icons/icon-uzum.svg?react";
import IconWb from "@/assets/icons/icon-wb.svg?react";
import IconOzon from "@/assets/icons/icon-ozon.svg?react";

type ChatItem = {
  id: number;
  name: string;
  time: string;
  message: string;
  icon: ReactNode;
  unread: boolean;
};

type ChatMessage = {
  id: number;
  chatId: number;
  text: string;
  time: string;
  sender: "me" | "user";
  file?: {
    name: string;
    type: string;
    url: string;
  };
};

const initialChats: ChatItem[] = [
  {
    id: 1,
    name: "Abror Xoliqov",
    time: "10:13",
    message: "Lorem ipsum dolor sit amet sdf siapdk",
    icon: createElement(IconUzum),
    unread: true,
  },
  {
    id: 2,
    name: "Uchiha Sasuka",
    time: "10:00",
    message: "Lorem ipsum dolor sit amet sdf siapdk",
    icon: createElement(IconWb),
    unread: false,
  },
  {
    id: 3,
    name: "Uchiha Sasuka",
    time: "10:13",
    message: "Lorem ipsum dolor sit amet sdf siapdk",
    icon: createElement(IconOzon),
    unread: false,
  },
];

const getCurrentTime = () =>
  new Intl.DateTimeFormat("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

export const usePage = () => {
  const [chats, setChats] = useState(initialChats);

  const [selectedChatId, setSelectedChatId] = useState(initialChats[0].id);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const [messageText, setMessageText] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === selectedChatId) ?? chats[0],
    [chats, selectedChatId],
  );

  const selectedMessages = useMemo(
    () => messages.filter((message) => message.chatId === selectedChatId),
    [messages, selectedChatId],
  );

  const handleSelectChat = (id: number) => {
    setSelectedChatId(id);
    setIsChatOpen(true);
  };
  const handleBackToList = () => {
    setIsChatOpen(false);
  };

  const handleSendMessage = () => {
    const text = messageText.trim();

    if (!text) return;

    const time = getCurrentTime();

    const nextMessage: ChatMessage = {
      id: Date.now(),
      chatId: selectedChatId,
      text,
      time,
      sender: "me",
    };

    setMessages((prev) => [...prev, nextMessage]);

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              message: text,
              time,
              unread: false,
            }
          : chat,
      ),
    );

    setMessageText("");
  };

  const handleMessageKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setMessageText((prev) => prev + emoji);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      const time = getCurrentTime();
      const nextMessage: ChatMessage = {
        id: Date.now(),
        chatId: selectedChatId,
        text: messageText || `📎 ${file.name}`,
        time,
        sender: "me",
        file: {
          name: file.name,
          type: file.type,
          url,
        },
      };

      setMessages((prev) => [...prev, nextMessage]);
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === selectedChatId
            ? {
                ...chat,
                message: `📎 ${file.name}`,
                time,
                unread: false,
              }
            : chat,
        ),
      );
      setMessageText("");
    };
    reader.readAsDataURL(file);
  };

  return {
    chats,
    selectedChat,
    selectedChatId,
    isChatOpen,
    selectedMessages,
    messageText,
    setMessageText,
    handleSelectChat,
    handleBackToList,
    handleSendMessage,
    handleMessageKeyDown,
    setIsChatOpen,
    showEmojiPicker,
    setShowEmojiPicker,
    handleEmojiClick,
    handleFileClick,
    handleFileSelect,
    fileInputRef,
  };
};
