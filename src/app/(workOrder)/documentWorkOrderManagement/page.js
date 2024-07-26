/*
 * @Date: 2024-07-26 11:39:14
 * @LastEditTime: 2024-07-26 18:28:15
 */

'use client'
import ComSearch from '@/components/com-search'
import ComTable from '@/components/com-table'
import { useHttp } from '@/hooks'
import { useCallback, useEffect } from 'react'
import { Button } from 'antd'

const DocumentWorkOrderManagement = () => {
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
        return <Button type='primary'>详情</Button>
      }
    }
  ]
  const onsubmit = useCallback((params) => {
    console.log('6666', params)
  }, [])
  return (
    <div>
      <ComSearch searchColumns={searchColumns} onSubmit={onsubmit} />

      <div className='mt-[20px]'>
        <ComTable
          columns={columns}
          api='/restApi/workOrder/customerWorkOrderList'
        />
      </div>
    </div>
  )
}
export default DocumentWorkOrderManagement
