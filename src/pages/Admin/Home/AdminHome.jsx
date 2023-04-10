import React, { useState } from 'react';
import "./AdminHome.css"
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from "../Menu/AdminMenu"
import Header from '../../../common/Header/Header'
import { Link } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sản phẩm bán được',
      data: ['100','200','500','400','600','100','100','200','500','400','600','100'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Sản phẩm nhận ký gửi',
      data: ['200','400','50','800','300','300','500','100','300','900','200','800'],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function AdminHome() {
  const customers = [
    {
      name: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',
      mail:'20521130@gmail.com',
      phone:'0376488361',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Minh Chí',
      mail:'20521130@gmail.com',
      phone:'0376488362',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Ronaldo',
      mail:'20521130@gmail.com',
      phone:'0376488367',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
    {
      name: 'Messi',
      mail:'20521130@gmail.com',
      phone:'0376488368',
      recent:'30/03/2023',
      cost:'3.000',
      avt:'http://surl.li/ggptd'
    },
]
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };
  return (
    <div className='AdminHome'>
      <Menu/>
      <Header/>
{/* -------------------------------------------------------------- */}
      <div className='AdminHome_main'>
        <div className='AdminHome_Overview'>
          <div className='Overview_block1'>
            <div className='Block_top'>
              <Icon icon="fluent-mdl2:product-variant" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Sản phẩm trong kho</p>
          </div>
          <div className='Overview_block2'>
            <div className='Block_top'>
              <Icon icon="la:file-invoice-dollar" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Số hóa đơn đến hạn</p>
          </div>
          <div className='Overview_block3'>
            <div className='Block_top'>
              <Icon icon="material-symbols:bar-chart" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Doanh thu hôm nay</p>
          </div>
          <div className='Overview_block4'>
            <div className='Block_top'>
              <Icon icon="la:file-invoice-dollar" />
              <span className='Quantity'>30</span>
            </div>
            <p className='Block_bottom'>Số đơn ký gửi hôm nay</p>
          </div>
        </div>
{/* -------------------------------------------------------------- */}
        <div className="AdminHome_Bottom">
          <div className='AdminHome_Chart'>
            <div className='AdminHome_Chart_Label'>
            <div className='Chart_Name'>Biểu đồ sản phẩm ký gửi và bán ra</div>
            <div className='Chart_Date'>
              <p className='Chart_LabelDay'>Ngày:</p>
              <button className='Chart_Calendar' onClick={toggleCalendar}>{selectedDate.toLocaleDateString()}</button>
              {showCalendar && (
                <Calendar
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              )}
            </div>
            </div>
            {/* -------------------------------------------------------------- */}
            <Line className='Chart_Detail' data={data} />
          </div>
          <div className='AdminHome_CustomerRecent'>
            <div className='CustomerRecent_Label'>Khách hàng gần đây</div>
              <div className='CustomerRecent_Info_List'>
                {
                  customers.map((customers,index) => {
                    if (index < 10) {
                      return (
                                <div className='CustomerRecent_Info'>
                                  <img className='CustomerRecent_Avt' src={customers.avt} alt="image"/>
                                  <div className='CustomerRecent_Name'>{customers.name}</div>
                                  <div className='CustomerRecent_Phone'>{customers.phone}</div>
                                </div>
                        )
                    }
                    })
                }
              </div>
            <Link to='/admin/customer'>
              <div className='CustomerRecent_ViewMore'>Xem thêm <Icon icon="ic:round-read-more" color="#878787" /></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome