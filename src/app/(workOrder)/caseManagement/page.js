/*
 * @Date: 2024-07-26 11:39:14
 * @LastEditTime: 2024-07-26 17:22:35
 */

'use client'
import ComSearch from '@/components/com-search'
import ComTable from '@/components/com-table'
import { useHttp } from '@/hooks'
import { useCallback, useEffect } from 'react'

const CaseManagement = () => {
  const searchColumns = [
    {
      label: '案件编号',
      prop: 'id',
      type: 'input'
    },
    {
      label: '案件名称',
      prop: 'name',
      type: 'input'
    },
    {
      label: '创建人',
      prop: 'createMemberName',
      type: 'input'
    },
    {
      label: '当事人',
      prop: 'partyName',
      type: 'input'
    },
    {
      label: '案件进度',
      prop: 'caseStatusText',
      type: 'input'
    },
    {
      label: '开始时间',
      prop: '',
      type: 'date'
    }
  ]
  const columns = [
    {
      title: '案件编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '案件编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '案件编号',
      dataIndex: 'id',
      key: 'id'
    }
  ]

  const onsubmit = useCallback((params) => {
    console.log('6666', params)
  }, [])
  return (
    <div>
      <ComSearch searchColumns={searchColumns} onSubmit={onsubmit} />
      <ComTable columns={columns} api='/restApi/case/list' />
    </div>
  )
}
export default CaseManagement
