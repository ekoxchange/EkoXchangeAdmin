import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { gridSpacing } from '../../store/constant';

// Components
import WalletBalances from './components/WalletBalances';
import RateManagement from './components/RateManagement';
import TradePairControl from './components/TradePairControl';
import ManualWithdrawal from './components/ManualWithdrawal';

const CryptoManagement = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Grid container spacing={gridSpacing}>
        <Grid item size={12}>
          <WalletBalances />
        </Grid>

        <Grid item xs={12} md={6}>
          <RateManagement />
        </Grid>

        <Grid item xs={12} md={6}>
          <TradePairControl />
        </Grid>

        <Grid item xs={12}>
          <ManualWithdrawal />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptoManagement;
