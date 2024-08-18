/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * KDVManager CRM API
 * OpenAPI spec version: v1
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useCallback } from "react";
import type { AddScheduleItemCommand } from "../../models/addScheduleItemCommand";
import type { ListScheduleItemsParams } from "../../models/listScheduleItemsParams";
import type { ScheduleItemListVM } from "../../models/scheduleItemListVM";
import type { UnprocessableEntityResponse } from "../../models/unprocessableEntityResponse";
import { useExecuteFetch } from "../../mutator/useExecuteFetch";

export const useListScheduleItemsHook = () => {
  const listScheduleItems = useExecuteFetch<ScheduleItemListVM[]>();

  return useCallback(
    (params?: ListScheduleItemsParams, signal?: AbortSignal) => {
      return listScheduleItems({
        url: `/scheduling/v1/scheduleitems`,
        method: "GET",
        params,
        signal,
      });
    },
    [listScheduleItems],
  );
};

export const getListScheduleItemsQueryKey = (params?: ListScheduleItemsParams) => {
  return [`/scheduling/v1/scheduleitems`, ...(params ? [params] : [])] as const;
};

export const useListScheduleItemsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
  TError = unknown,
>(
  params?: ListScheduleItemsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getListScheduleItemsQueryKey(params);

  const listScheduleItems = useListScheduleItemsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>
  > = ({ signal }) => listScheduleItems(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListScheduleItemsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>
>;
export type ListScheduleItemsQueryError = unknown;

export function useListScheduleItems<
  TData = Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
  TError = unknown,
>(
  params: undefined | ListScheduleItemsParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
          TError,
          TData
        >,
        "initialData"
      >;
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useListScheduleItems<
  TData = Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
  TError = unknown,
>(
  params?: ListScheduleItemsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
          TError,
          TData
        >,
        "initialData"
      >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useListScheduleItems<
  TData = Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
  TError = unknown,
>(
  params?: ListScheduleItemsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };

export function useListScheduleItems<
  TData = Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
  TError = unknown,
>(
  params?: ListScheduleItemsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useListScheduleItemsHook>>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useListScheduleItemsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const useAddScheduleItemHook = () => {
  const addScheduleItem = useExecuteFetch<string>();

  return useCallback(
    (addScheduleItemCommand: AddScheduleItemCommand) => {
      return addScheduleItem({
        url: `/scheduling/v1/scheduleitems`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: addScheduleItemCommand,
      });
    },
    [addScheduleItem],
  );
};

export const useAddScheduleItemMutationOptions = <
  TError = UnprocessableEntityResponse,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAddScheduleItemHook>>>,
    TError,
    { data: AddScheduleItemCommand },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useAddScheduleItemHook>>>,
  TError,
  { data: AddScheduleItemCommand },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const addScheduleItem = useAddScheduleItemHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useAddScheduleItemHook>>>,
    { data: AddScheduleItemCommand }
  > = (props) => {
    const { data } = props ?? {};

    return addScheduleItem(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type AddScheduleItemMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAddScheduleItemHook>>>
>;
export type AddScheduleItemMutationBody = AddScheduleItemCommand;
export type AddScheduleItemMutationError = UnprocessableEntityResponse;

export const useAddScheduleItem = <
  TError = UnprocessableEntityResponse,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAddScheduleItemHook>>>,
    TError,
    { data: AddScheduleItemCommand },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<ReturnType<typeof useAddScheduleItemHook>>>,
  TError,
  { data: AddScheduleItemCommand },
  TContext
> => {
  const mutationOptions = useAddScheduleItemMutationOptions(options);

  return useMutation(mutationOptions);
};
