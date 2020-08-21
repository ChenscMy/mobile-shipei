import request from "../utils/request"
export function getData(){
  return request({
    method: "GET",
    // 地址
    url: "/"
  })
}