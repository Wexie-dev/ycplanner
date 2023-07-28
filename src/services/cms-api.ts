import { GetContentResponse } from '@/types';
import { GraphQLClient, gql } from 'graphql-request';
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
      galleries {
        title
        image {
          url
          height
          width
          fileName
        }
      howIWorks {
        title1
        image {
          url
          width
          height
          fileName
        }
        subtitle1
        paragraph1
        subtitle2
        paragraph2
        subtitle3
        paragraph3
        title2
        paragraph_service_list
      }
    }
  `;

  const data = await graphcms.request<GetContentResponse>(query);
  return data;
};
