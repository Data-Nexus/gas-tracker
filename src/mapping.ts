import { BigInt } from "@graphprotocol/graph-ts"
import { ERC20, Transfer} from "../generated/ERC20/ERC20"
import { Block } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  
  let entity = Block.load(event.block.number.toString())

  if (!entity) {
    entity = new Block(event.block.number.toString())

    entity.id = event.block.number.toString()
    entity.BaseFee = event.block.baseFeePerGas
    entity.BlockNum = event.block.number
    entity.BlockTime = event.block.timestamp
    entity.GasUsed = event.block.gasUsed
    entity.save()
  }

 }

