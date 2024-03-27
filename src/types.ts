import { ReactNode } from "react";

export interface Data {
  id?: string;
  img: string;
  name: string;
  description: string;
  rating?: number;
}

export type CardData = Data[];

export interface GridProp {
  children: ReactNode;
}

export interface CardProps extends Data {}
