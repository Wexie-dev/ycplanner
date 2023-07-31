import { GetContentResponse } from '@/types';
import { GraphQLClient, gql } from 'graphql-request';
const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL as string;
export const graphcms = new GraphQLClient(CMS_API_URL, {});

export const fetchContent = async () => {
  const imageFragment = gql`
    fragment ImageFragment on Asset {
      url
      height
      width
      fileName
    }
  `;

  const bannerFragment = gql`
    fragment BannerFragment on Banner {
      backgroundImg {
        ...ImageFragment
      }
    }
  `;

  const aboutFragment = gql`
    fragment AboutFragment on About {
      title
      description
      subtitle
      image {
        ...ImageFragment
      }
      keyPoints
      eventsTitle
      events {
        title
        image {
          ...ImageFragment
        }
      }
    }
  `;

  const howIWorksFragment = gql`
    fragment HowIWorksFragment on HowIWork {
      title1
      image {
        ...ImageFragment
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
  `;

  // Actual content query
  const query = gql`
    query Contents {
      banners {
        ...BannerFragment
      }
      abouts {
        ...AboutFragment
      }
      howIWorks {
        ...HowIWorksFragment
      }
    }
    ${imageFragment}
    ${bannerFragment}
    ${aboutFragment}
    ${howIWorksFragment}
  `;

  const data = await graphcms.request<GetContentResponse>(query);
  return data;
};
