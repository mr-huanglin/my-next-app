/*
 * @Date: 2024-07-26 16:51:14
 * @LastEditTime: 2024-07-26 18:01:38
 */
'use client'
import { useHttp } from '@/hooks'
import { Table } from 'antd'
import { useEffect, useState, useCallback } from 'react'

const ComTable = ({ columns = [], api, defaultParams = {} }) => {
  const [listData, setListData] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [listParams, setListParams] = useState({
    pageNo: 1,
    pageSize: 10
  })

  const getList = useCallback(async () => {
    setLoading(true)
    try {
      const {
        result: { rows, total }
      } = await useHttp(api, { ...listParams, ...defaultParams })
      setListData(rows)
      setTotal(total)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [api, listParams, defaultParams])

  const onChange = useCallback((pagination, filters, sorter) => {
    setListParams((prevParams) => ({
      ...prevParams,
      pageNo: pagination.current,
      pageSize: pagination.pageSize
    }))
  }, [])

  useEffect(() => {
    getList()
  }, [listParams])

  return (
    <Table
      dataSource={listData}
      columns={columns}
      rowKey={(record) => record.id}
      loading={loading}
      pagination={{
        total: total,
        current: listParams.pageNo,
        pageSize: listParams.pageSize,
        showSizeChanger: true,
        showTotal: (total) => `总共 ${total} 条`
      }}
      bordered
      onChange={onChange}
    />
  )
}

export default ComTable
