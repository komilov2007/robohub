import { memo } from 'react';
import AnalyticsDashboard from './analitika';
import { Box } from '@mui/material';
import DashboardStatsSection from './stats';
import OrdersPage from '../order/page';

const Page = () => {
  return (
    <Box>
      <DashboardStatsSection/>
      <Box  sx={{padding:'10px'}}>

      <AnalyticsDashboard/>
      </Box>
      <OrdersPage/>
    </Box>
  );
};

export default memo(Page);