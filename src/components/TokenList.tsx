type ListProps = {
  accountAddress: string;
}

const TokenList = ({accountAddress}: ListProps) => {
  return (
    <div>TokenList: {accountAddress}</div>
  )
}

export default TokenList