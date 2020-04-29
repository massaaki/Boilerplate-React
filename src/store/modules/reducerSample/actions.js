export function addItemSample(item){
  return {
    type: '@reducerSample/ADD',
    item
  };
}

/**
 * Example to use Middleware
 * in PATH_TO_MODULE, call addItemSampleRequest instead addItem
 */
// export function addItemSampleRequest(id){
//   return {
//     type: '@reducerSample/ADD_REQUEST',
//     item
//   };
// }


// export function addItemSampleSucess(item){
//   return {
//     type: '@reducerSample/ADD_SUCCESS',
//     item
//   };
// }

//-
