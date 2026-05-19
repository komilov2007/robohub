import { CloseRounded } from "@mui/icons-material";

import {
  EmojiCloseButton,
  EmojiGrid,
  EmojiItem,
  EmojiPickerHeader,
  EmojiPickerTitle,
  EmojiPickerWrap,
} from "@/pages/admin/chat/styled";

const emojis = ["😀", "😂", "😍", "🔥", "🎉", "❤️", "👍", "🥰"];

const EmojiPicker = ({ handleEmojiClick, setShowEmojiPicker }: any) => {
  return (
    <EmojiPickerWrap>
      <EmojiPickerHeader>
        <EmojiPickerTitle>Emoji</EmojiPickerTitle>

        <EmojiCloseButton onClick={() => setShowEmojiPicker(false)}>
          <CloseRounded />
        </EmojiCloseButton>
      </EmojiPickerHeader>

      <EmojiGrid>
        {emojis.map((emoji) => (
          <EmojiItem
            key={emoji}
            onClick={() => {
              handleEmojiClick(emoji);
              setShowEmojiPicker(false);
            }}
          >
            {emoji}
          </EmojiItem>
        ))}
      </EmojiGrid>
    </EmojiPickerWrap>
  );
};

export default EmojiPicker;
