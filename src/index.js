import request from './axios'

// 查询
export function listGoods(query) {
  return request({
    url: 'url',
    method: 'get',
    params: query
  })
}
// 查询单条
export function getGoods(id) {
  return request({
    url: '/url/' + id,
    method: 'get'
  })
}
// 新增
export function addGoods(data) {
  return request({
    url: '/url',
    method: 'post',
    data: data
  })
}
// 修改
export function updateGoods(data) {
  return request({
    url: '/url',
    method: 'put',
    data: data
  })
}
// 删除
export function delGoods(id) {
  return request({
    url: '/url/' + id,
    method: 'delete'
  })
}