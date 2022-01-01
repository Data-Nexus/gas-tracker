import { BigInt } from "@graphprotocol/graph-ts"
import { ethereum } from '@graphprotocol/graph-ts'
import { Block } from "../generated/schema"

export function handleBlock(block: ethereum.Block): void {
  
  let entity = Block.load(block.number.toString())

  if (!entity) {
    entity = new Block(block.number.toString())

    entity.id = block.number.toString()
    entity.BaseFee = block.baseFeePerGas
    entity.BlockNum = block.number
    entity.BlockTime = block.timestamp
    entity.save()
  }

 }

