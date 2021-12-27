import { BigInt } from "@graphprotocol/graph-ts"
import { ERC20, Transfer, Burn } from "../generated/ERC20/ERC20"
import { Block } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Block.load(event.block.number.toString())

  if (!entity) {
    entity = new Block(event.transaction.from.toHex())

    entity.id = event.block.number.toString()
    entity.BaseFee = event.block.baseFeePerGas
    entity.BlockNum = event.block.number
      // Entities can be written to the store with `.save()`
    entity.save()
  }

 }
