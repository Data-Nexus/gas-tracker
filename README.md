# gas-tracker


## **Example Queries 🖥️**

**Querying Documentation:**
https://thegraph.com/docs/en/developer/querying-from-your-app/

**Temporary Query URL - This is rate limited for testing purposes:**
https://api.studio.thegraph.com/query/533/gas-tracker/v0.0.5

### Gather the most recent base fee in a block:

```bash
query LatestBaseFee {
  blocks(first: 1, orderBy: id, orderDirection: desc) {
    BaseFee
    BlockNum
  }
}
```

Updated to listen to all ERC20 transfers which ingests 98% of blocks.
