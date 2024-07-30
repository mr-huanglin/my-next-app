/*
 * @Date: 2024-07-26 11:39:14
 * @LastEditTime: 2024-07-30 17:20:20
 */

'use client'
import ComSearch from '@/components/com-search'
import ComTable from '@/components/com-table'
import { useCallback, useState } from 'react'
import { Button, Card } from 'antd'
import { useRouter } from 'next/navigation'

const DocumentWorkOrderManagement = () => {
  const [searchParams, setSearchParams] = useState({})
  const router = useRouter()
  const orderDetail = (val) => {
    router.push(`/documentWorkOrderManagement/${val.id}`)
  }
  const searchColumns = [
    {
      label: '工单编号',
      prop: 'id',
      type: 'input'
    },
    {
      label: '工单名称',
      prop: 'workOrderName',
      type: 'input'
    },
    {
      label: '创建人',
      prop: 'createMemberName',
      type: 'input'
    },
    {
      label: '委托人',
      prop: 'principalMemberName',
      type: 'input'
    },
    {
      label: '工单进度',
      prop: 'typeText',
      type: 'input'
    },
    {
      label: '开始时间',
      prop: 'date',
      type: 'date'
    }
  ]
  const columns = [
    {
      title: '工单编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '工单名称',
      dataIndex: 'workOrderName',
      key: 'workOrderName'
    },
    {
      title: '创建人',
      dataIndex: 'createMemberName',
      key: 'createMemberName'
    },
    {
      title: '委托人',
      dataIndex: 'principalMemberName',
      key: 'principalMemberName'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: '工单进度',
      dataIndex: 'typeText',
      key: 'typeText'
    },
    {
      title: '群聊名称',
      dataIndex: 'groupName',
      key: 'groupName'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record) => {
        return (
          <Button
            type='primary'
            onClick={() => {
              orderDetail(record)
            }}
          >
            详情
          </Button>
        )
      }
    }
  ]
  const onsubmit = useCallback((params) => {
    setSearchParams(params)
  }, [])
  return (
    <div>
      <Card>
        <ComSearch searchColumns={searchColumns} onSubmit={onsubmit} />
      </Card>

      <div className='mt-[15px]'>
        <Card>
          <ComTable
            columns={columns}
            searchParams={searchParams}
            api='/restApi/workOrder/customerWorkOrderList'
          />
        </Card>
      </div>
    </div>
  )
}
export default DocumentWorkOrderManagement
