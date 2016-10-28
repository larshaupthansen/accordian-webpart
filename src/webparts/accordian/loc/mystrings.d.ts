declare interface IAccordianStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'accordianStrings' {
  const strings: IAccordianStrings;
  export = strings;
}
