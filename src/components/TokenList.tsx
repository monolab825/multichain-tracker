import "@covalenthq/goldrush-kit/styles.css";
import {
    GoldRushProvider,
    TokenBalancesListView,
} from "@covalenthq/goldrush-kit";


type ListProps = {
  accountAddress: string;
}

const TokenList = ({accountAddress}: ListProps) => {
  return (
    <section>
      <div>
        <GoldRushProvider
          apikey="cqt_rQ7KmpM8xD7gFRBff4Q3kCKKXFff"
          mode="dark"
          color="emerald"
        >
          <TokenBalancesListView
            chain_names={[
              "eth-mainnet",
              "matic-mainnet",
              "bsc-mainnet",
              "avalanche-mainnet",
              "optimism-mainnet",
            ]}
            hide_small_balances
            address={accountAddress}
          />
        </GoldRushProvider>
      </div>
    </section>
  )
}

export default TokenList