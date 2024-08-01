/*
 * @Date: 2024-07-26 16:51:14
 * @LastEditTime: 2024-07-30 17:47:52
 */
'use client'
import { useHttp } from '@/hooks'
import { Table } from 'antd'
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle
} from 'react'

const ComTable = forwardRef(
  (
    {
      columns = [],
      api,
      defaultParams = null,
      searchParams = null,
      immediately = true
    },
    ref
  ) => {
    {
      const [listData, setListData] = useState([])
      const [total, setTotal] = useState(0)
      const [loading, setLoading] = useState(false)
      const [listParams, setListParams] = useState({
        pageNo: 1,
        pageSize: 10
      })

      const getList = async () => {
        setLoading(true)
        try {
          const params = {
            ...listParams,
            ...defaultParams,
            ...searchParams
          }
          const {
            result: { rows, total }
          } = await useHttp(api, params)
          setListData(rows)
          setTotal(total)
        } catch (error) {
        } finally {
          setLoading(false)
        }
      }

      const onChange = useCallback((pagination, filters, sorter) => {
        setListParams((prevParams) => ({
          ...prevParams,
          pageNo: pagination.current,
          pageSize: pagination.pageSize
        }))
      }, [])

      const init = () => {
        setListParams((prevParams) => ({
          ...prevParams,
          pageNo: 1,
          pageSize: 10
        }))
      }

      useEffect(() => {
        if (immediately && api) getList()
      }, [immediately, listParams])

      useEffect(() => {
        init()
      }, [searchParams])

      useImperativeHandle(ref, () => ({
        init
      }))

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
  }
)

export default ComTable
