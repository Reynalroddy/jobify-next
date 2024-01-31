import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import JobsList from '@/components/JobsList';
import { getAllJobsAction } from '@/utils/actions';
import SearchContainer from '@/components/SearchForm';
const page =  async() => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['jobs', '', 'all', 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (   
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchContainer/>
   <JobsList/>
   </HydrationBoundary>
  )
}

export default page



