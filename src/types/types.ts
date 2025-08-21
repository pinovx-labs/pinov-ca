import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { CSSProperties } from "styled-components";
import { ReactNode } from "react";
import  { To } from "react-router-dom";

export type ITestimonyData = {
  id: number;
  imgSrc: string;
  testimony: string;
  name: string;
  role: string;
}[];

export type IButton = {
  bgColor: string;
  text: string;
  hasIcon?: string;
  cName?: string;
  style: {};
  click: any;
  isLoading: boolean;
};

export type ICarouselItems = [
  {
    id: number;
    imgSrc: string;
    caption: string;
    description: string;
  }
];

export type IContactRequest = {
  name: string;
  emailAddress: string;
  companyName: string;
  serviceType: string[] | null;
  projectDescription: string;
};

export type IP = {
  click?: () => void; // function to call
  textColor: string;
  text: string;
  style?: {};
  cName?: string;
  children?: ReactNode;
  isAnimatable: boolean; // describes if title should be animated
};

/**
 * This describes the type `IProjectCards`

 ** `imgSrc`: Corresponds to the source of the image
 ** `cardTitle`: Corresponds to the title of the card
 ** `cardText`: Corresponds to the text on the card
 ** `minHeight`: Optional - Corresponds to the minimum height of the card
 ** `maxHeight`: Optional - Corresponds to the maximum height of the card
 ** `link`: Optional - Corresponds to external link
 ** `projectName`: Corresponds to the name of the project. This is displayed as an alt text for the `imgSrc`
 */

export type IProjectCards = {
  imgSrc: string;
  cardTitle: string;
  cardText: string;
  minHeight?: string;
  maxHeight?: string;
  link: To;
  projectName: string;
};



export type IServices = {
  setServiceType: (value: any) => void;
  serviceType: string[];
};



export type IFormTextarea = {
  placeholder?: string;
  name: string;
  cName?: string;
  id: string;
  hasLabel?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  style?: CSSProperties;
  value?: string;
  rest?: any;
  errorText?: string | undefined;
  control?: any;
};

export interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  cName?: string;
  id: string;
  hasLabel?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  value?: any;
  rest?: any;
  errorText?: string | undefined;
  icon?: ReactNode;
  control?: any;
}
