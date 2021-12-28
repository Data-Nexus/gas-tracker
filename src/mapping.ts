import { BigInt } from "@graphprotocol/graph-ts"
import { USDC, Transfer, Burn } from "../generated/USDC/USDC"
import { Block } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  
  let entity = Block.load(event.block.number.toString())

  if (!entity) {
    entity = new Block(event.block.number.toString())

    entity.id = event.block.number.toString()
    entity.BaseFee = event.block.baseFeePerGas
    entity.BlockNum = event.block.number
    entity.BlockTime = event.block.timestamp

    entity.save()
  }

 }

