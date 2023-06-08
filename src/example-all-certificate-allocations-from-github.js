import { RenewableEnergyPurchases } from '@filecoin-renewable-energy-purchases/js-api'

const renewableEnergyPurchases = new RenewableEnergyPurchases()

/**
 * Get all certificates' allocations from Github / CSV files
 * parameters: ()
 */
const certificateAllocationsObj = await renewableEnergyPurchases.getAllCertificateAllocationsFromGithub()
console.dir(certificateAllocationsObj, { depth: null })

process.exit()