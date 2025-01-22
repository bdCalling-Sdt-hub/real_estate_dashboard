import React from 'react';
import { Select } from 'antd';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';


const items = [
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
];


const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 500 },
  { name: 'Apr', uv: 200 },
  { name: 'May', uv: 800 }, 
  { name: 'Jun', uv: 450 },
  { name: 'Jul', uv: 600 },
  { name: 'Aug', uv: 700 },
  { name: 'Sep', uv: 500 },
  { name: 'Oct', uv: 400 },
  { name: 'Nov', uv: 450 },
  { name: 'Dec', uv: 500 },
];


const handleChange = (value) => {
  console.log(`Selected year: ${value}`);
};

export const IncomeOverview = () => {
  return (
    <div>
      <div className='flex justify-between p-3 px-7'>
        <p className='text-xl font-medium'>Income Overview</p>
        <Select
          defaultValue="2024"
          style={{ width: 120 }}
          onChange={handleChange}
          options={items}
        />
      </div>
      <div className='w-full h-[400px]'>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#2A216D" 
              strokeWidth={7} 
              fillOpacity={0.2} 
              fill="#FEFEFE"
            />
           
            {data.map((entry, index) =>
              entry.name === "May" ? (
                <Dot
                  key={index}
                  cx="50%"
                  cy="50%"
                  r={6}
                  fill="#2A216D" 
                  stroke="#2A216D"
                />
              ) : null
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
