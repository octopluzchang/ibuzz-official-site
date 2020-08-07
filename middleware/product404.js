export default function ({
  store,
  route,
  redirect
}) {
  if (route.params.products) {
    store.state.selectedProduct = store.state.products.map(function (e) {
      return e.name;
    }).indexOf(route.params.products);
  }

  var i;
  for (i = 0; i < store.state.products.length; i++) {
    store.state.products[i].services.map(function (e) {
      return e.name;
    }).indexOf(route.params.service);
  }



  if (store.state.selectedProduct == -1) {
    store.state.selectedProduct = 0
    return redirect('/商業報告分析')
  }

}
