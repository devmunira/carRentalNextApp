import { useRouter } from 'next/navigation';

export const updateQueryParams = (query , val) => {
    const router = useRouter();
    router.push({
        pathname : '/',
        query : {[query] : val}
    } , {scroll : false})
}