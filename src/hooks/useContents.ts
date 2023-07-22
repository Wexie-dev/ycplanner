import { fetchContent } from "@/services/cms-api";
import { GetContentResponse } from "@/types";
import { UseQueryResult, useQuery } from "react-query";

export function useContentsQuery(): UseQueryResult<GetContentResponse> {
  return useQuery("content", fetchContent);
}
