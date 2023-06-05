import { RenewableEnergyPurchases } from '@filecoin-renewable-energy-purchases/js-api'

const renewableEnergyPurchases = new RenewableEnergyPurchases()

let certificatesAndAttestations = {}
/**
 * Ensure IPFS is up and running
 */
const ipfs = await renewableEnergyPurchases.ensureIpfsIsRunning()

/**
 * Get certificates and attestations
 * parameters: ()
 */
const certificatesAndAttestationsObj = await renewableEnergyPurchases.getCertificatesAndAttestations()

// Parse certificates and attestations object
for (const certificatesAndAttestationsKey of Object.keys(certificatesAndAttestationsObj)) {
    const contractsAndAllocationDag = await ipfs.dag.get(certificatesAndAttestationsObj[certificatesAndAttestationsKey].deliveries_cid)
    for (let certificateObj of contractsAndAllocationDag.value.certificates) {
        const certificateCid = await ipfs.dag.get(certificateObj.cid)
        certificateObj.certificate = certificateCid.value
    }
    certificatesAndAttestations[certificatesAndAttestationsKey] = contractsAndAllocationDag.value
}

console.dir(certificatesAndAttestations, { depth: null })

process.exit()