/** @jsxImportSource @emotion/react */
import { Announcement, Modal, ModalProps, TabContent, Tabs, TokenIconWithSymbol } from 'components';
import React from 'react';
import { useTranslation } from 'translation';
import { VToken } from 'types';
import { isTokenActionEnabled } from 'utilities';

import AssetAccessor from 'containers/AssetAccessor';

import BorrowForm from './BorrowForm';
import RepayForm from './RepayForm';
import { useStyles } from './styles';

export interface BorrowRepayProps {
  onClose: ModalProps['handleClose'];
  vToken: VToken;
  poolComptrollerAddress: string;
}

const BorrowRepay: React.FC<BorrowRepayProps> = ({ onClose, vToken, poolComptrollerAddress }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const tabsContent: TabContent[] = [];

  if (
    isTokenActionEnabled({
      token: vToken.underlyingToken,
      action: 'borrow',
    })
  ) {
    tabsContent.push({
      title: t('borrowRepayModal.borrowTabTitle'),
      content: (
        <div css={styles.container}>
          <AssetAccessor
            vToken={vToken}
            poolComptrollerAddress={poolComptrollerAddress}
            connectWalletMessage={t('borrowRepayModal.borrow.connectWalletMessage')}
            enableTokenMessage={t('borrowRepayModal.borrow.enableToken.title', {
              symbol: vToken.underlyingToken.symbol,
            })}
            assetInfoType="borrow"
          >
            {({ asset, pool }) => <BorrowForm asset={asset} pool={pool} onCloseModal={onClose} />}
          </AssetAccessor>
        </div>
      ),
    });
  }

  if (
    isTokenActionEnabled({
      token: vToken.underlyingToken,
      action: 'repay',
    })
  ) {
    tabsContent.push({
      title: t('borrowRepayModal.repayTabTitle'),
      content: (
        <div css={styles.container}>
          <AssetAccessor
            vToken={vToken}
            poolComptrollerAddress={poolComptrollerAddress}
            connectWalletMessage={t('borrowRepayModal.repay.connectWalletMessage')}
            enableTokenMessage={t('borrowRepayModal.repay.enableToken.title', {
              symbol: vToken.underlyingToken.symbol,
            })}
            assetInfoType="borrow"
          >
            {({ asset, pool }) => <RepayForm asset={asset} pool={pool} onCloseModal={onClose} />}
          </AssetAccessor>
        </div>
      ),
    });
  }

  return (
    <Modal
      isOpen
      title={<TokenIconWithSymbol token={vToken.underlyingToken} variant="h4" />}
      handleClose={onClose}
    >
      <>
        <Announcement token={vToken.underlyingToken} />

        {tabsContent.length > 0 && <Tabs tabsContent={tabsContent} />}
      </>
    </Modal>
  );
};

export default BorrowRepay;
