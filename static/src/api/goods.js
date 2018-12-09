import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/api/goods/list',
    method: 'get',
    params
  })
}
export function create(params) {
  return request({
  url: '/admin/api/goods/create',
  method: 'post',
  data: params
  })
}