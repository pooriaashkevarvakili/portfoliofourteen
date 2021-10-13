export interface OneCatalogData {
  SectionTag: string;
  ClientId: string;
  FirstHeader: string;
  SecondHeader: string;
  // it will contain html
  ShortDescription: string;
  LongDescription: string;
  ChildFirstHeader: string | null;
  ChildSecondHeader: string | null;
  ChildShortDescription: string | null;
  ChildLongDescription: string | null;
  ContentAttachment: string[];
  ChildContentAttachment: string[];
  Id: string;
  Dateadd: Date;
  Datemodified: Date;
  IsVerify: boolean;
  IsActive: boolean;
}
