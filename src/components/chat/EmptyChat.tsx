import { ChatEmpty } from "@/pages/admin/chat/styled";

const EmptyChat = ({ t }: any) => {
  return <ChatEmpty>{t("no_messages")}</ChatEmpty>;
};

export default EmptyChat;
