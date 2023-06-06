import { RenewableEnergyPurchases } from '@filecoin-renewable-energy-purchases/js-api'

const renewableEnergyPurchases = new RenewableEnergyPurchases()

/**
 * Get contracts and allocations from Github / CSV files
 * parameters: ()
 */
const contractsAndAllocationsObj = await renewableEnergyPurchases.getContractsAndAllocationsFromGithub()
console.dir(contractsAndAllocationsObj, { depth: null })

process.exit()