function redirectToProduct(productId) {
    console.log('Redirecting to:', productId); // Log product ID for testing

    const productLinks = {
        'product1': 'https://amzn.to/40fenEG', // CRZ YOGA Butterluxe High Waisted Lounge Leggings      
        'product2': 'https://amzn.to/4ahT0XZ', // Trendy Queen Women’s Oversized Hoodies Fleece Sweatshirts  
        'product3': 'https://amzn.to/4fZ4DUR', // SOJOS Retro Oval Sunglasses       
        'product4': 'https://amzn.to/4fRao79', // Evshine Women’s Fuzzy Slippers        
        'product5': 'https://amzn.to/4hcZ06v', // COSRX Snail Mucin 96% Power Repairing Essence      
        'product6': 'https://amzn.to/3WbbtQc', // COLOR WOW Dream Coat Supernatural Spray     
        'product7': 'https://amzn.to/408Vq6J', // Stanley Quencher H2.0 FlowState Tumbler        
        'product8': 'https://amzn.to/4hd3omj', // Fit Simplify Resistance Loop Workout Bands        
    };

    if (productLinks[productId]) {
        // Open the product link in a new tab
        window.open(productLinks[productId], '_blank');
    } else {
        console.error("Product link not found for:", productId);
    }
}