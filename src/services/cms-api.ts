import { GraphQLClient, gql } from "graphql-request";
const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL as string;
export const graphcms = new GraphQLClient(CMS_API_URL, {});

// Define TypeScript types for your data
interface Banner {
  backgroundImg: {
    url: string;
    fileName: string;
    height: number;
    width: number;
  };
}

export interface About {
  title: string;
}

export interface GetContentResponse {
  banners: Banner[];
  abouts: About[];
}

export const fetchContent = async () => {
  const query = gql`
    query Contents {
      banners {
        backgroundImg {
          url
          height
          width
          fileName
        }
      }
      abouts {
        title
      }
    }
  `;

  const data = await graphcms.request(query);
  return data;
};
