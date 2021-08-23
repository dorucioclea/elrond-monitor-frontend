// eslint-disable-next-line import/prefer-default-export
export const tableFields = {
  accountFields: [
    {
      key: 'address',
      class: ['w-390', 'table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--blue'],
    },
    {
      key: 'balance',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'stake',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'unstake',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
  ],
  transactionsFields: [
    {
      key: 'hash',
      label: 'Txn Hash',
      class: ['table__cell', 'w-180'],
      thClass: ['table__title'],
      tdClass: ['table__cell--blue'],
    },
    {
      key: 'shard',
      class: ['table__cell', 'w-180'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'from',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common', 'table__cell--blue'],
    },
    {
      key: 'to',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'age',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'fee',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'valueEGLD',
      label: 'Value EGLD',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'valueUSD',
      label: 'Value $',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
  ],
  accountsTransactionsFields: [
    {
      key: 'hash',
      label: 'Txn Hash',
      class: ['w-180', 'table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--blue'],
    },
    {
      key: 'age',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'shard',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'from',
      class: ['w-180', 'table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common', 'table__cell--blue'],
    },
    {
      key: 'status',
      class: ['w-70', 'table__cell'],
      thClass: ['table__title table__title--disable'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'to',
      class: ['w-180 table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common table__cell--blue'],
    },
    {
      key: 'valueEGLD',
      label: 'Value EGLD',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'valueUSD',
      label: 'Value $',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
  ],
  validatorsFields: {
    validators: [
      {
        key: 'name',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'stake',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'stake_percent',
        label: 'Cumulative Stake %',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'validators',
        label: 'Nodes',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
    ],
    stakingProviders: [
      {
        key: 'name',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'stake',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'num_nodes',
        label: 'Nodes',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'apr',
        label: 'Computed APR',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'service_fee',
        label: 'Service Fee',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'delegation_cap',
        label: 'Delegation cap',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: '',
        label: 'Filled',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
    ],
    nodesFields: [
      {
        key: 'publicKey',
        label: 'Public key',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common table__cell--blue'],
      },
      {
        key: 'nodeDisplayName',
        label: 'Name',
        class: ['table__cell', 'w-180'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'shardId',
        label: 'Shard',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'versionNumber',
        label: 'Version',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'upTime',
        label: 'Uptime',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'status',
        label: 'Status',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
      {
        key: 'rating',
        label: 'Rating',
        class: ['table__cell'],
        thClass: ['table__title'],
        tdClass: ['table__cell--common'],
      },
    ],
  },
  blocksFields: [
    {
      key: 'nonce',
      label: 'Block',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block table__cell--blue'],
    },
    {
      key: 'shard',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'transaction',
      label: 'Txns',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'size',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'time',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'provider',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
  ],
};
