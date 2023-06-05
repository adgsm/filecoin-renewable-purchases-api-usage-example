import { RenewableEnergyPurchases } from '@filecoin-renewable-energy-purchases/js-api'

const renewableEnergyPurchases = new RenewableEnergyPurchases()

let contractsAndAllocations = {}

/**
 * Ensure IPFS is up and running
 */
const ipfs = await renewableEnergyPurchases.ensureIpfsIsRunning()

/**
 * Get contracts and allocations
 * parameters: ()
 */
const contractsAndAllocationsObj = await renewableEnergyPurchases.getContractsAndAllocations()

// Parse contracts and allocations object
for (const contractsAndAllocationsKey of Object.keys(contractsAndAllocationsObj)) {
    const contractsAndAllocationDag = await ipfs.dag.get(contractsAndAllocationsObj[contractsAndAllocationsKey].order_cid)
    contractsAndAllocations[contractsAndAllocationsKey] = contractsAndAllocationDag.value
}

console.dir(contractsAndAllocations, { depth: null })

process.exit()