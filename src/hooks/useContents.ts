import { GetContentResponse, fetchContent } from "@/services/cms-api";
import { UseQueryResult, useQuery } from "react-query";

export function useContentsQuery(): UseQueryResult<GetContentResponse> {
  return useQuery("content", fetchContent);
}
