import Image from "next/image";

import axios from "axios";
import { use } from "react";
import { AdCard } from "../components/AdCard";

export const ADS_BACKEND_URL = 'http://localhost:4000';
export interface AdCardProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  picture?: string;
}

async function fetchAds(): Promise<AdCardProps[]> {
  try {
    const { data } = await axios.get<AdCardProps[]>(ADS_BACKEND_URL + '/ads');
    return data.sort((adLeft: AdCardProps, adRight: AdCardProps) => adLeft.title < adRight.title ? -1 : 1);
  } catch (e) {
    console.error(e, 'cannot fetch ads - falling back to empty array');
    return [];
  }
}

export default function AdsPage() {

  const ads = use(fetchAds());

  return (
    <main>
      {ads.map((adProps, index: number) => (
        <div key={index}>
          <AdCard {...adProps} />
        </div>
      ))}
    </main>
  );
}
