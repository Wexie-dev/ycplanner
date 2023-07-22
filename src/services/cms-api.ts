import { GetContentResponse } from "@/types";
import { GraphQLClient, gql } from "graphql-request";
const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL as string;
export const graphcms = new GraphQLClient(CMS_API_URL, {});

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

  const data = await graphcms.request<GetContentResponse>(query);
  return data;
};
