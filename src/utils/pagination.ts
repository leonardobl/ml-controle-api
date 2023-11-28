import { IPaganation } from '../types/paginatio';

interface IPaginationPropsType extends IPaganation {
  response: any;
}

export function ToPagination({
  page,
  size,
  pageSize,
  sizeItens,
  response,
}: IPaginationPropsType) {
  return {
    response,
    pagination: {
      page,
      size,
      sizeItens,
      pageSize,
    },
  };
}
