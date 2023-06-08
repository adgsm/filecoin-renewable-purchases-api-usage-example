import { RenewableEnergyPurchases } from '@filecoin-renewable-energy-purchases/js-api'

const renewableEnergyPurchases = new RenewableEnergyPurchases()

/**
 * Get all allocations with added contract properties from Github / CSV files
 * parameters: ()
 */
const allAllocationsObj = await renewableEnergyPurchases.getAllAllocationsFromGithub()
console.dir(allAllocationsObj, { depth: null })

process.exit()