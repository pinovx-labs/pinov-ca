import { Key } from "react";
import { Path } from "react-router-dom";



export type ILocation = {
  pathname: any;
  state: any;
  key: Key;
};

export type IUseLocationPathName = {
  location: ILocation;
  limit: number;
  isFirstLetterUppercased: boolean;
  searchQuery: string;
  pathname?: Path;
};

export type useLocationPathNameResult = {
  path: string;
  searchParam: string | null;
};


export const useLocationPathName = (props: IUseLocationPathName): useLocationPathNameResult => {

  const string = props.location?.pathname?.split("/")[props.limit];
  const firstLetter = props.isFirstLetterUppercased ? string?.charAt(0).toLocaleUpperCase() : string?.charAt(0).toLocaleLowerCase();
  const lastLetters = string?.slice(1);

  const path = firstLetter + lastLetters


  const urlSearchParams = new URLSearchParams(window.location.search);
  const searchParam = urlSearchParams.get(props.searchQuery && props.searchQuery);

  return {
    path, // beauty
    searchParam // type
  };
};