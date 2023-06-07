import { RenewableEnergyPurchases } from '@filecoin-renewable-energy-purchases/js-api'

const renewableEnergyPurchases = new RenewableEnergyPurchases()

/**
 * Get attestations, certificates and related allocations from Github / CSV files
 * parameters: ()
 */
const attestationsAndCertificatesObj = await renewableEnergyPurchases.getAttestationsAndCertificatesFromGithub()
console.dir(attestationsAndCertificatesObj, { depth: null })

process.exit()