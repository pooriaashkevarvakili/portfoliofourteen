import { OneCatalogData } from "../types/OneCatalogData";
import { OneSEOTagData } from "../types/OneSEOTagData";

export class DataService {
  // fields

  static catalogData: OneCatalogData[];
  static SEOTagsData: OneSEOTagData[];
  private static readonly options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ClientKey: process.env.KEYFORURL!,
    },
  };

  // ------------------------------- ---------------------

  private constructor() {}

  // ------------------------------- ---------------------

  static getCatalogData = async () => {
    if (DataService.catalogData) return DataService.catalogData;
    try {
      const result = await fetch(
        process.env.CLIENT_DATA_URL!,
        DataService.options
      );
      DataService.catalogData = await result.json();
      return DataService.catalogData;
    } catch (error) {
      console.log(error, "seems there is trouble for get data!");
      return DataService.catalogData;
    }
  };

  // ------------------------------- ---------------------

  static getSEOTags = async () => {
    if (DataService.SEOTagsData) return DataService.SEOTagsData;
    try {
      const result = await fetch(
        process.env.PAGE_TAG_URL!,
        DataService.options
      );
      DataService.SEOTagsData = await result.json();
      return DataService.SEOTagsData;
    } catch (error) {
      console.log(error, "seems there is trouble for get SEO Tags!");
      return DataService.SEOTagsData;
    }
  };

  // ------------------------------- ---------------------

  // section tag is field in data response object
  static filterCatalogDataBySectionField = async (
    SectionTag: string,
    notInIt?: string
  ) => {
    let data: OneCatalogData[] = DataService.catalogData;

    if (!data) {
      data = await DataService.getCatalogData();
    }

    return data.filter((x) => {
      return x.SectionTag.includes(SectionTag);
    });

    // if(newData.length === 1) return newData[0];
    // else return newData;
  };

  // ------------------------------- ---------------------

  // page name is name of page and what we define on creation of them in panel
  static getCurrentPageForCatchSEOTags = async (pageName: string) => {
    let tags: OneSEOTagData[] = DataService.SEOTagsData;

    if (!tags) {
      tags = await DataService.getSEOTags();
    }

    return tags.find((x) => x.Name === pageName);
  };
}
