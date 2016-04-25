app.service('clientService', ['$q','$http', function($q, $http) {
  var clients = [
    {
      id: 1,
      name: 'Candido',
      email: 'candidosg@gmail.com',
      tels: ['99 545433-5216'],
      addresses: [4]
    }, {
      id: 2,
      name: 'Candiditi',
      email: 'tete@gmail.com',
      tels: ['99 545433-5216', '11 34333-5216'],
      addresses: [6, 5]
    }, {
      id: 3,
      name: 'Noé Rodrigues',
      email: 'free@gmail.com',
      tels: ['86 12321-3221', '11 87622-3313'],
      addresses: [ 1, 2 ]
    }
  ];
  
  function loadAll() {
    return $q.when(clients);
  }
  
  function getAddresses(id) {
  //  var request = $http({
  //                   method: 'get',
  //                   url: '/clients/' + id + '/addresses',
  //               });
  //   return( request.then( handleSuccess, handleError ) );
  }
  
  function get(args) {
    var id = args.id;    
    for (var i = 0; i < clients.length ; i++) {
      if (clients[i].id === id ) {
        return clients[i];
      }
    }
  //  var request = $http({
  //                   method: 'get',
  //                   url: '/clients/' + id,
  //               });
  //   return( request.then( handleSuccess, handleError ) );
  }
  
  function handleError( response ) {
    // The API response from the server should be returned in a
    // nomralized format. However, if the request was not handled by the
    // server (or what not handles properly - ex. server error), then we
    // may have to normalize it on our end, as best we can.
    if ( ! angular.isObject( response.data ) || ! response.data.message ) {
      return( $q.reject( "An unknown error occurred." ) );
    }
    // Otherwise, use expected error message.
    return( $q.reject( response.data.message ) );
  }
  // I transform the successful response, unwrapping the application data
  // from the API response payload.
  function handleSuccess( response ) {
    return( response.data );
  }
  
  function create(args) {
    
  }
  
  function update(args) {
    
  }
  
  return {
    loadAll: loadAll,
    get: get,
    getAddresses: getAddresses,
    create:create,
    update:update
  }
  
}]);

app.service('addressService', ['$q','$http', function($q, $http) {
  var addresses = [
    {
      id: 4, 
      address: 'Rua fulano de tal',
      number: 300, 
      neighborhood: { id: 1, name: 'Fátima' }, 
      city: 'Teresina', 
      state: 'PI', 
      cep: '64010-350',
      complement: 'Próximo a Av. João XXIII',
      client: 1
    }, {
      id: 6, 
      address: 'Rua Visconde da Parnaíba',
      number: 3030, 
      neighborhood: { id: 2, name: 'Nossa Senhora de Fátima' }, 
      city: 'Teresina', 
      state: 'PI', 
      cep: '64010-350',
      complement: 'Perto da Potycabana',
      client: 2
    }, { 
      id: 5, 
      tel: '11 34333-5216', 
      address: 'Rua Jockey Clube',
      number: 500, 
      neighborhood: { id: 3, name: 'Jockey' }, 
      city: 'Teresina', 
      state: 'PI', 
      cep: '64010-350',
      complement: 'Apt 145',
      client: 2
    }, {
      id: 1, 
      tel: '86 12321-3221', 
      address: 'Avenida Marechal Castelo Branco',
      number: 500, 
      neighborhood: { id: 3, name: 'Jockey' }, 
      city: 'Teresina', 
      state: 'PI', 
      cep: '64010-350',
      complement: '',
      client: 3
    }, { 
      id: 2, 
      tel: '11 87622-3313', 
      address: 'Avenida Pres. Kennedy',
      number: 1800, 
      neighborhood: { id: 3, name: 'Jockey' }, 
      city: 'Teresina', 
      state: 'PI', 
      cep: '64010-350',
      complement: 'Próximo ao Frigotil',
      client: 3
    }
  ];
  
  function get(args) {
    var id = args.id;
    console.log('getIdAddress', id);

    for (var i = 0; i < addresses.length ; i++) {
      if (addresses[i].id === id ) {
        return addresses[i];
      }
    }
  }
  
  function getAllByClient(args) {
    var id = args.id;
    
    return addresses.filter(function(address) {
      if (address.client === id) {
        return address;
      }
    });
  }
  
  function create(args) {
    var address = args.address;
    address.id = parseInt(address.id);  
    
    addresses.push(address);
    return true;
  }
  
  function update(args) {
    var address = args.address;
    address.id = parseInt(address.id);  
    
    for (var i = 0; i < addresses.length; i++) {
      if (address.id == addresses[i].id) {
        addresses[i] = address;
        return true;
      }
    }
  }
  
  return {
    get:get,
    getAllByClient:getAllByClient,
    create:create,
    update:update
  }
}]);

app.service('neighborhoodService', ['$q','$http', function($q, $http) {
  var neighborhoods = [
    {
      id: 1, 
      name: 'Mocambinho',
    }, {
      id: 2, 
      name: 'Nossa Senhora de Fátima',
    }, { 
      id: 3, 
      name: 'Jockey'  
    }
  ];
  
  function loadAll(args) {
    return neighborhoods;
  }
  
  function get(args) {
    var id = args.id;
    for (var i = 0; i < addresses.length ; i++) {
      if (addresses[i].id === id ) {
        return addresses[i];
      }
    }
  }
  
  function create(args) {
    
  }
  
  function update(args) {
    
  }
  
  return {
    loadAll: loadAll,
    get: get,
    create:create,
    update:update
  }
}]);