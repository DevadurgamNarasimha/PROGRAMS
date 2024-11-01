const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
  ];
  
  function displayProducts(products) {
    console.log("Product Inventory:");
    products.forEach(product => {
      console.log(product );
    });
  }
    function filterProducts(products, criteria){
    return products.filter(product => {
      return Object.keys(criteria).every(key => product[key] === criteria[key]);
    });
  }
    function sortProducts(products, key){
    return products.slice().sort((a, b) => a[key] > b[key] ? 1 : -1);
  }
    function generateReport(products){
    const totalValue = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const averagePrice = totalValue / products.length;
    const categoryDistribution = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + product.quantity;
      return acc;
    }, {});
    return {
      totalValue,
      averagePrice,
      categoryDistribution
    };
  }
    console.log("=== All Products ===");
  displayProducts(products);
  console.log("\n=== Filtered Products (Available) ===");
  
  const availableProducts = filterProducts(products, { available: true });
  displayProducts(availableProducts);
  console.log("\n=== Sorted Products by Price ===");

  const sortedProducts = sortProducts(products, 'price');
  displayProducts(sortedProducts);
  console.log("\n=== Inventory Report ===");
  const report = generateReport(products);
  console.log( report.totalValue);
  console.log( report.averagePrice.toFixed(2));
  console.log("Category Distribution:", report.categoryDistribution);