import { Addressesprops } from "@/app/type"

const createAddress = async ({name, address, zipcode, city, country, addressId}: Addressesprops) => {
    
    // Set the default URL endpoint to 'create'
    let url = 'create'
    // If an addressId is provided in the details object, update the URL to 'update'
    if (addressId) url = 'update'
    // Use the fetch API to make a POST request to the server's /api/address/{url} endpoint
    const response = await fetch(`/api/address/${url}`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            // Convert the details object into a JSON string and provide it as the request body
            addressId: addressId,
            name: name,
            address: address,
            zipcode: zipcode,
            city: city,
            country: country,
        })
    })

    const data = await response.json();

    return data
}

export default createAddress;