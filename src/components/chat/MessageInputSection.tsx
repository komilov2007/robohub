import { Send as SendIcon } from "@mui/icons-material";

import IconEmoji from "@/assets/icons/icon-emoji.svg?react";
import IconFile from "@/assets/icons/icon-chat-file.svg?react";

import EmojiPicker from "./EmojiPicker";

import {
  ChatFooter,
  MessageInput,
  MessageSendActions,
} from "@/pages/dashboard/chat/styled";

const MessageInputSection = ({
  t,
  messageText,
  setMessageText,
  handleMessageKeyDown,
  handleSendMessage,
  showEmojiPicker,
  setShowEmojiPicker,
  handleEmojiClick,
  handleFileClick,
  handleFileSelect,
  fileInputRef,
}: any) => {
  return (
    <ChatFooter>
      <MessageInput
        value={messageText}
        placeholder={t("write_here")}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={handleMessageKeyDown}
      />

      <MessageSendActions>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <IconEmoji />
        </div>

        <input
          hidden
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
        />

        <div style={{ cursor: "pointer" }} onClick={handleFileClick}>
          <IconFile />
        </div>

        <SendIcon
          onClick={handleSendMessage}
          sx={{
            cursor: "pointer",
            color: messageText.trim() ? "#00524F" : "#808080",
          }}
        />

        {showEmojiPicker && (
          <EmojiPicker
            handleEmojiClick={handleEmojiClick}
            setShowEmojiPicker={setShowEmojiPicker}
          />
        )}
      </MessageSendActions>
    </ChatFooter>
  );
};

export default MessageInputSection;
