import { useState } from "react";

export const usePage = () => {
  const [title, setTitle] = useState("Untitled");

  const handleSave = () => {
    console.log("saved");
  };

  const handleAddMarketplace = () => {
    console.log("add marketplace");
  };

  const handleCreateGroup = () => {
    console.log("create group");
  };

  return {
    title,
    setTitle,
    handleSave,
    handleAddMarketplace,
    handleCreateGroup,
  };
};
