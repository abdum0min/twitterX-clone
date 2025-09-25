import fetcher from '@/lib/fetcher'
import useSwr from 'swr'
import { isError } from 'util'

const useUsers = (limit: number) => {
    const { data, error, isLoading, mutate } = useSwr(`/api/users?limit=${limit}`, fetcher)


    return {
        users: data,
        isLoading,
        isError: error,
        mutate
    }

}


export default useUsers