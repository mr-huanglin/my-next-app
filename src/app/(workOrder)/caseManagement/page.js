/*
 * @Date: 2024-07-26 11:39:14
 * @LastEditTime: 2024-07-30 16:40:35
 */

'use client'
import ComSearch from '@/components/com-search'
import ComTable from '@/components/com-table'
import { useCallback } from 'react'
import { Card } from 'antd'

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
      <Card>
        <ComSearch searchColumns={searchColumns} onSubmit={onsubmit} />
      </Card>
      <div className='mt-[15px]'>
        <Card>
          <ComTable columns={columns} api='/restApi/case/list' />
        </Card>
      </div>
    </div>
  )
}
export default CaseManagement
