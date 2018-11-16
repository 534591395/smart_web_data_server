import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/api/goods/list',
    method: 'get',
    params
  })
}
