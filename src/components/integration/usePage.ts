import { useState, type FC, type SVGProps } from "react";
import { useBoolean } from "@/hook/useBoolean";

import IconBillz from "@/assets/icons/icon-zoom.svg?react";
import IconMeet from "@/assets/icons/icon-meet.svg?react";
import IconTeam from "@/assets/icons/icon-team.svg?react";
import IconBilz from "@/assets/icons/icon-billz.svg?react";
import IconHubSpot from "@/assets/icons/icon-hubspot.svg?react";
import IconSpot from "@/assets/icons/icon-spot.svg?react";
import IconP from "@/assets/icons/icon-p.svg?react";

export type IntegrationAction = "connected" | "connect";

export interface IntegrationItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  action: IntegrationAction;
}

export interface IntegrationSection {
  id: number;
  titleKey: string;
  items: IntegrationItem[];
}

const sections: IntegrationSection[] = [
  {
    id: 1,
    titleKey: "integration_connected",
    items: [
      {
        id: 1,
        titleKey: "Zoom",
        descriptionKey: "integration_zoom_desc",
        Icon: IconBillz,
        action: "connected",
      },
      {
        id: 2,
        titleKey: "Google Meet",
        descriptionKey: "integration_meet_desc",
        Icon: IconMeet,
        action: "connected",
      },
      {
        id: 3,
        titleKey: "Microsoft Teams",
        descriptionKey: "integration_teams_desc",
        Icon: IconTeam,
        action: "connected",
      },
    ],
  },
  {
    id: 2,
    titleKey: "integration_logistics",
    items: [
      {
        id: 1,
        titleKey: "Billz",
        descriptionKey: "integration_billz_desc",
        Icon: IconBilz,
        action: "connect",
      },
      {
        id: 2,
        titleKey: "HubSpot",
        descriptionKey: "integration_hubspot_desc",
        Icon: IconHubSpot,
        action: "connect",
      },
      {
        id: 3,
        titleKey: "integration_hubspot_enrichment",
        descriptionKey: "integration_hubspot_enrichment_desc",
        Icon: IconSpot,
        action: "connect",
      },
      {
        id: 4,
        titleKey: "Pipedrive",
        descriptionKey: "integration_pipedrive_desc",
        Icon: IconP,
        action: "connect",
      },
    ],
  },
  {
    id: 3,
    titleKey: "integration_warehouse",
    items: [
      {
        id: 1,
        titleKey: "Billz",
        descriptionKey: "integration_billz_desc",
        Icon: IconBilz,
        action: "connect",
      },
      {
        id: 2,
        titleKey: "HubSpot",
        descriptionKey: "integration_hubspot_desc",
        Icon: IconHubSpot,
        action: "connect",
      },
      {
        id: 3,
        titleKey: "integration_hubspot_enrichment",
        descriptionKey: "integration_hubspot_enrichment_desc",
        Icon: IconSpot,
        action: "connect",
      },
      {
        id: 4,
        titleKey: "Pipedrive",
        descriptionKey: "integration_pipedrive_desc",
        Icon: IconP,
        action: "connect",
      },
    ],
  },
];

export const usePage = () => {
  const { value: openModal, setTrue, setFalse } = useBoolean();
  const [selectedItem, setSelectedItem] = useState<IntegrationItem | null>(
    null,
  );

  const handleOpenModal = (item: IntegrationItem) => {
    setSelectedItem(item);
    setTrue();
  };

  const handleCloseModal = () => {
    setFalse();
  };

  return {
    sections,
    openModal,
    selectedItem,
    handleOpenModal,
    handleCloseModal,
  };
};
