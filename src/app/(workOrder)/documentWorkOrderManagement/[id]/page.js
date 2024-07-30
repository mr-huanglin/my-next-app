/*
 * @Date: 2024-07-27 12:03:55
 * @LastEditTime: 2024-07-30 16:30:51
 */
'use client'

import { useHttp } from '@/hooks'
import { useEffect, useState } from 'react'
import { Descriptions, Card, Timeline } from 'antd'
import { filterPrice } from '@/filter'
import ComTable from '@/components/com-table'

const Detail = (props) => {
  const {
    params: { id }
  } = props

  const [orderDetail, setOrderDetail] = useState({})

  const orderInfo = [
    {
      label: '工单名称',
      children: <p>{orderDetail.workOrderName}</p>
    },
    {
      label: '工单类型',
      children: <p>{orderDetail.typeText}</p>
    },
    {
      label: '套餐外额外费用',
      children: (
        <p>
          {orderDetail.additionalPrice
            ? filterPrice(orderDetail.additionalPrice) + '元'
            : '-'}
        </p>
      )
    },
    {
      label: '创建时间',
      children: <p>{orderDetail.createTime}</p>
    },
    {
      label: '完结时间',
      children: <p>{orderDetail.complateTime}</p>
    }
  ]

  const comTableColumns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: (text, records, index) => {
        return <div>{index + 1}</div>
      }
    },
    {
      title: '进度状态',
      dataIndex: 'nodeText',
      key: 'nodeText'
    },
    {
      title: '创建人',
      dataIndex: 'createMemberName',
      key: 'createMemberName'
    },
    {
      title: '费用',
      dataIndex: 'id',
      key: 'id',
      render(text, record) {
        return (
          <div>{record.price ? filterPrice(record.price) + '元' : '-'}</div>
        )
      }
    },
    {
      title: '支付状态',
      dataIndex: 'id',
      key: 'id',
      render: (text, records) => {
        return <div>{records.isPay === 0 ? '未支付' : '已支付'}</div>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    }
  ]

  const timeLineItems = orderDetail.workOrderNodeList
    ? orderDetail.workOrderNodeList.map((item, index) => {
        return {
          children: item.nodeText
        }
      })
    : []

  const getDetail = async () => {
    const { result } = await useHttp(`/restApi/workOrder/detail/${id}`)
    setOrderDetail(result)
  }

  useEffect(() => {
    getDetail()
  }, [id])

  return (
    <div>
      <Card>
        <Timeline items={timeLineItems} />
      </Card>
      <div className='my-[15px]'>
        <Card>
          <Descriptions column={1} title='工单信息' items={orderInfo} />
        </Card>
      </div>
      <div>
        <Card>
          <ComTable
            columns={comTableColumns}
            api='/restApi/workOrderNode/list'
            defaultParams={{ workOrderId: id }}
          />
        </Card>
      </div>
    </div>
  )
}
export default Detail
