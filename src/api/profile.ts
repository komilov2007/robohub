import { queryOptions } from "@tanstack/react-query";

import { api } from "./api";

export type ProfileResponse = {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  phone?: string;
  phone_number?: string;
  email?: string;
  image?: string;
  avatar?: string;
};

export const PROFILE_QUERY_KEY = ["profile"] as const;
const PROFILE_CACHE_KEY = "robohub_profile_cache";
const PROFILE_CACHE_TTL = 5 * 60 * 1000;

type ProfileCache = {
  data: ProfileResponse;
  updatedAt: number;
};

export const readCachedProfile = () => {
  try {
    const cached = localStorage.getItem(PROFILE_CACHE_KEY);

    if (!cached) return undefined;

    const parsed = JSON.parse(cached) as ProfileCache;

    if (Date.now() - parsed.updatedAt > PROFILE_CACHE_TTL) {
      localStorage.removeItem(PROFILE_CACHE_KEY);
      return undefined;
    }

    return parsed.data;
  } catch {
    localStorage.removeItem(PROFILE_CACHE_KEY);
    return undefined;
  }
};

export const writeCachedProfile = (data: ProfileResponse) => {
  localStorage.setItem(
    PROFILE_CACHE_KEY,
    JSON.stringify({
      data,
      updatedAt: Date.now(),
    }),
  );
};

export const getProfile = async () => {
  const { data } = await api.get<ProfileResponse>("account/profile/");

  writeCachedProfile(data);

  return data;
};

export const profileQueryOptions = () =>
  queryOptions({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: getProfile,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    initialData: readCachedProfile,
    initialDataUpdatedAt: () => {
      const cached = readCachedProfile();

      return cached ? Date.now() : undefined;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
