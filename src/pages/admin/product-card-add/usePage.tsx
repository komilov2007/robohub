import { createElement, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import IconOzon from '@/assets/icons/icon-ozon.svg?react';
import IconYandex from '@/assets/icons/icon-yandex.svg?react';
import IconWb from '@/assets/icons/icon-wb.svg?react';
import IconUzum from '@/assets/icons/icon-uzum.svg?react';
export interface MarketplaceItemType {
  id: string;
  name: string;
  checked: boolean;
  badge?: string | ReactElement;
  badgeTone?: 'link' | 'share';
  isShare?: boolean;
}
export interface MediaItem {
  id: number;
  file?: File;
  preview?: string;
  isVideo?: boolean;
}
export default function usePage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [marketplaces, setMarketplaces] = useState<MarketplaceItemType[]>([
    {
      id: 'ozon',
      name: 'Ozon',
      checked: true,
      badge: createElement(IconOzon),
      badgeTone: 'link',
    },
    {
      id: 'yandex',
      name: 'Yandex Market',
      checked: false,
      badge: createElement(IconYandex),
      badgeTone: 'link',
    },
    {
      id: 'wildberries',
      name: 'Wildberries',
      checked: true,
      badge: createElement(IconWb),
      badgeTone: 'link',
    },
    {
      id: 'uzum',
      name: 'Uzum Market',
      checked: true,
      badge: createElement(IconUzum),
      badgeTone: 'link',
    },
    {
      id: 'kaspi',
      name: 'Kaspi',
      checked: true,
      badge: 'Ulash',
      badgeTone: 'share',
      isShare: true,
    },
    {
      id: 'robosell',
      name: 'Robosell',
      checked: true,
      badge: 'Ulash',
      badgeTone: 'share',
      isShare: true,
    },
  ]);

  const [form, setForm] = useState({
    nameUz: '',
    nameRu: '',
    categoryOzon: '',
    categoryWb: '',
    categoryUzum: '',
    descriptionRu: '',
    descriptionUz: '',
    brand: '',
    manufacturer: '',
    noBrand: false,
    height: '',
    length: '',
    width: '',
    widthUnit: 'Sm',
    weight: '',
    weightUnit: 'Kg',
    barcode: '',
    variation: '',
    featureUz: '',
    featureRu: '',
  });

  const [media, setMedia] = useState<MediaItem[]>([]);

  const toggleMarketplace = (id: string) => {
    setMarketplaces((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleFilesChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newItems: MediaItem[] = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
      isVideo: file.type.startsWith('video/'),
    }));

    setMedia((prev) => [...prev, ...newItems]);
  };

  const handleBadgeClick = (item: MarketplaceItemType) => {
    if (item.isShare) {
      navigate('/integration');
    }
  };

  return {
    fileInputRef,
    marketplaces,
    form,
    media,
    toggleMarketplace,
    handleChange,
    openFileDialog,
    handleFilesChange,
    handleBadgeClick,
  };
}