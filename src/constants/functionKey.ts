enum FunctionKey {
  // Queries
  GET_IS_ADDRESS_AUTHORIZED = 'GET_IS_ADDRESS_AUTHORIZED',
  GET_BLOCK_NUMBER = 'GET_BLOCK_NUMBER',
  GET_VAI_CALCULATE_REPAY_AMOUNT = 'GET_VAI_CALCULATE_REPAY_AMOUNT',
  GET_VAI_REPAY_AMOUNT_WITH_INTERESTS = 'GET_VAI_REPAY_AMOUNT_WITH_INTERESTS',
  GET_VAI_TREASURY_PERCENTAGE = 'GET_VAI_TREASURY_PERCENTAGE',
  GET_MAIN_MARKETS = 'GET_MAIN_MARKETS',
  GET_MARKET_HISTORY = 'GET_MARKET_HISTORY',
  GET_SUBGRAPH_ISOLATED_POOLS = 'GET_SUBGRAPH_ISOLATED_POOLS',
  GET_VENUS_VAI_STATE = 'GET_VENUS_VAI_STATE',
  GET_MINTED_VAI = 'GET_MINTED_VAI',
  GET_PENDING_REWARDS = 'GET_PENDING_REWARDS',
  GET_TOKEN_ALLOWANCE = 'GET_TOKEN_ALLOWANCE',
  GET_BALANCE_OF = 'GET_BALANCE_OF',
  GET_TOKEN_BALANCES = 'GET_TOKEN_BALANCES',
  GET_MINTABLE_VAI = 'GET_MINTABLE_VAI',
  GET_VRT_CONVERSION_END_TIME = 'GET_VRT_CONVERSION_END_TIME',
  GET_VRT_CONVERSION_RATIO = 'GET_VRT_CONVERSION_RATIO',
  GET_XVS_WITHDRAWABLE_AMOUNT = 'GET_XVS_WITHDRAWABLE_AMOUNT',
  GET_VENUS_VAI_VAULT_DAILY_RATE = 'GET_VENUS_VAI_VAULT_DAILY_RATE',
  GET_VENUS_VAI_VAULT_RATE = 'GET_VENUS_VAI_VAULT_RATE',
  GET_V_TOKEN_BALANCE = 'GET_V_TOKEN_BALANCE',
  GET_V_TOKEN_BALANCES_ALL = 'GET_V_TOKEN_BALANCES_ALL',
  GET_V_TOKEN_INTEREST_RATE_MODEL = 'GET_V_TOKEN_INTEREST_RATE_MODEL',
  GET_V_TOKEN_APY_SIMULATIONS = 'GET_V_TOKEN_APY_SIMULATIONS',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  GET_XVS_VAULT_REWARD_PER_BLOCK = 'GET_XVS_VAULT_REWARD_PER_BLOCK',
  GET_XVS_VAULT_TOTAL_ALLOCATION_POINTS = 'GET_XVS_VAULT_TOTAL_ALLOCATION_POINTS',
  GET_XVS_VAULT_POOL_INFOS = 'GET_XVS_VAULT_POOL_INFOS',
  GET_XVS_VAULT_USER_INFO = 'GET_XVS_VAULT_USER_INFO',
  GET_XVS_VAULT_PENDING_WITHDRAWALS_FROM_BEFORE_UPGRADE = 'GET_XVS_VAULT_PENDING_WITHDRAWALS_FROM_BEFORE_UPGRADE',
  GET_XVS_VAULT_POOLS_COUNT = 'GET_XVS_VAULT_POOLS_COUNT',
  GET_XVS_VAULT_WITHDRAWAL_REQUESTS = 'GET_XVS_VAULT_WITHDRAWAL_REQUESTS',
  GET_CURRENT_VOTES = 'GET_CURRENT_VOTES',
  GET_VOTERS = 'GET_VOTERS',
  GET_PENDING_XVS = 'GET_PENDING_XVS',
  GET_PROPOSALS = 'GET_PROPOSALS',
  GET_PROPOSAL = 'GET_PROPOSAL',
  GET_VOTE_RECEIPT = 'GET_VOTE_RECEIPT',
  GET_VAI_VAULT_USER_INFO = 'GET_VAI_VAULT_USER_INFO',
  GET_VOTE_DELEGATE_ADDRESS = 'GET_VOTE_DELEGATE_ADDRESS',
  GET_VOTE_SUMMARY = 'GET_VOTE_SUMMARY',
  GET_PROPOSAL_STATE = 'GET_PROPOSAL_STATE',
  GET_LATEST_PROPOSAL_ID_BY_PROPOSER = 'GET_LATEST_PROPOSAL_ID_BY_PROPOSER',
  GET_VOTER_ACCOUNTS = 'GET_VOTER_ACCOUNTS',
  GET_VOTER_DETAILS = 'GET_VOTER_DETAILS',
  GET_VOTER_HISTORY = 'GET_VOTER_HISTORY',
  GET_PROPOSAL_THRESHOLD = 'GET_PROPOSAL_THRESHOLD',
  GET_PROPOSAL_ETA = 'GET_PROPOSAL_ETA',
  GET_PANCAKE_SWAP_PAIRS = 'GET_PANCAKE_SWAP_PAIRS',
  GET_VAI_REPAY_APY = 'GET_VAI_REPAY_APY',
  GET_LEGACY_POOL = 'GET_LEGACY_POOL',
  GET_ISOLATED_POOLS = 'GET_ISOLATED_POOLS',
  GET_VTOKENS = 'GET_VTOKENS',
  GET_HYPOTHETICAL_PRIME_APYS = 'GET_HYPOTHETICAL_PRIME_APYS',
  GET_PRIME_TOKEN = 'GET_PRIME_TOKEN',
  GET_PRIME_STATUS = 'GET_PRIME_STATUS',

  // Mutations
  MINT_VAI = 'MINT_VAI',
  ENTER_MARKET = 'ENTER_MARKET',
  EXIT_MARKET = 'EXIT_MARKET',
  REPAY_VAI = 'REPAY_VAI',
  APPROVE_TOKEN = 'APPROVE_TOKEN',
  REVOKE_SPENDING_LIMIT = 'REVOKE_SPENDING_LIMIT',
  APPROVE_VRT = 'APPROVE_VRT',
  CONVERT_VRT = 'CONVERT_VRT',
  SUPPLY = 'SUPPLY',
  REDEEM = 'REDEEM',
  REDEEM_UNDERLYING = 'REDEEM_UNDERLYING',
  REPAY = 'REPAY',
  BORROW = 'BORROW',
  WITHDRAW_XVS = 'WITHDRAW_XVS',
  CREATE_PROPOSAL = 'CREATE_PROPOSAL',
  EXECUTE_PROPOSAL = 'EXECUTE_PROPOSAL',
  QUEUE_PROPOSAL = 'QUEUE_PROPOSAL',
  CANCEL_PROPOSAL = 'CANCEL_PROPOSAL',
  SET_VOTE_DELEGATE = 'SET_VOTE_DELEGATE',
  CAST_VOTE = 'CAST_VOTE',
  CAST_VOTE_WITH_REASON = 'CAST_VOTE_WITH_REASON',
  STAKE_IN_XVS_VAULT = 'STAKE_IN_XVS_VAULT',
  STAKE_IN_VAI_VAULT = 'STAKE_IN_VAI_VAULT',
  WITHDRAW_FROM_VAI_VAULT = 'WITHDRAW_FROM_VAI_VAULT',
  REQUEST_WITHDRAWAL_FROM_XVS_VAULT = 'REQUEST_WITHDRAWAL_FROM_XVS_VAULT',
  EXECUTE_WITHDRAWAL_FROM_XVS_VAULT = 'EXECUTE_WITHDRAWAL_FROM_XVS_VAULT',
  SWAP_TOKENS = 'SWAP_TOKENS',
  SWAP_TOKENS_AND_REPAY = 'SWAP_TOKENS_AND_REPAY',
  SWAP_TOKENS_AND_SUPPLY = 'SWAP_TOKENS_AND_SUPPLY',
  CLAIM_REWARDS = 'CLAIM_REWARDS',
  CLAIM_PRIME_TOKEN = 'CLAIM_PRIME_TOKEN',
}

export default FunctionKey;
